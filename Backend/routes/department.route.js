const router = require("express").Router();
const { where } = require("sequelize");
const sequelize = require("../db/config/sequelize.config");
// const Department =  require('../db/models/department.model')
// const Employee =  require('../db/models/employee.model')
const { Department, Employee } = require("../db/models/associations"); // Import models from associations.js

//READ
// department.js
router.route("/").get(async (req, res) => {
  const departmentName = req.query.departmentName;
  await Department.findAll()
    .then((dept) => {
      if (dept && dept.length > 0) {
        res.status(200).json({ success: true, departments: dept }); // Include the department data
      } else {
        res.status(400).json({ success: false });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal server error" });
    });
});

//
router.route("/user/:id").get(async (req, res) => {
  const deptId = req.params.id;

  try {
    const department = await Department.findOne({
      where: {
        deptId: deptId,
      },
      include: [
        {
          model: Employee,
          as: "employees",
        },
      ],
    });

    if (department) {
      res.status(200).json({ success: true, department });
    } else {
      res.status(404).json({ success: false, message: "Department not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// Add a new route to fetch total employees
router.route("/totalEmployees").get(async (req, res) => {
  try {
    const totalEmployees = await Department.findAll({
      attributes: [
        "col_id",
        [
          sequelize.fn("COUNT", sequelize.col("employees.col_id")),
          "totalEmployees",
        ],
      ],
      include: {
        model: Employee, // Assuming your Employee model is imported
        required: true,
        as: "employees", // Use the alias specified in the Department-Employee association
        attributes: [],
      },
      group: ["department.col_id"],
    });

    const totalEmployeesMap = {};
    totalEmployees.forEach((dept) => {
      totalEmployeesMap[dept.getDataValue("col_id")] =
        dept.getDataValue("totalEmployees");
    });

    if (res.status(200)) {
      res.status(200).json(totalEmployeesMap);
    } else {
      res.status(202).json({ success: true });
    }
  } catch (error) {
    console.error("Error fetching total employees:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//CREATE
router.route("/deptADD").post(async (req, res) => {
  const { departmentName } = req.body;

  if (!departmentName) {
    return res.status(400).json({ error: "Department name is required" });
  }

  try {
    const department = await Department.create({
      col_departmentName: departmentName,
    });
    return res.status(200).json({ success: true, department });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ success: false, error: "Internal server error" });
  }
});

router.route("/:id").get(async (req, res) => {
  const deptId = req.params.id;

  await Department.findOne({
    where: {
      deptId: deptId,
    },
  })
    .then((data) => {
      if (data) {
        res.status(200).json({ succeed: true, data: data });
      } else {
        res.status(200).json({ succeed: false });
      }
    })
    .catch((e) => {
      res.status(400).json({ errorMessage: e });
    });
});

//UPDATE
router.route("/UpdateDept/:param_id").patch(async (req, res) => {
  const deptId = req.params.param_id;
  await Department.update(req.body, {
    where: {
      deptId: deptId,
    },
  })
    .then((update) => {
      if (update) {
        res.json({ success: true });
      } else {
        res.status(400).json({ success: false });
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(409).json({ errorMessage: err });
    });
});

// //DELETE:
router.route("/deleteDept/:param_id").delete(async (req, res) => {
  const dept_id = req.params.param_id;

  await Employee.findAll({
    where: {
      col_dept: dept_id,
    },
  })
    .then((dept) => {
      if (dept && dept.length > 0) {
        res.status(202).json({ success: true });
      } else {
        Department.destroy({
          where: {
            col_id: dept_id,
          },
        })
          .then((del) => {
            if (del) {
              res.json({ success: true });
            } else {
              res.status(400).json({ success: false });
            }
          })
          .catch((err) => {
            console.error(err);
            res.status(409);
          });
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ success: false, error: "Internal server error" });
    });
});

module.exports = router;
