const router = require("express").Router();

const { Sequelize, Op } = require("sequelize");
//Branch Model:
const Branch = require("../db/models/branch.model");
//User Model:
const User = require("../db/models/user.model");
//Employee Model
const Employee = require("../db/models/employee.model");

//view all branch
router.route("/").get(async (req, res) => {
  const branchName = req.query.branchName;
  if (branchName === undefined) {
    await Branch.findAll()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(400).json({ errorMessage: err });
      });
  } else {
    //For search:
    await Branch.findAll({
      where: {
        [Op.or]: [
          {
            branch_name: {
              [Op.like]: `%${branchName}`,
            },
          },
          {
            branch_name: {
              [Op.like]: `${branchName}`,
            },
          },
        ],
      },
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(400).json({ errorMessage: err });
      });
  }
});

router.route("/:id").get(async (req, res) => {
  const branchId = req.params.id;

  await Branch.findOne({
    where: {
      branchId: branchId,
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

//view employee on a branch
router.route("/users/:id").get(async (req, res) => {
  const branchId = req.params.id;
  console.log(branchId);
  if (branchId === undefined) {
    await Branch.findAll({
      include: {
        model: Employee,
        as: "employees",
        required: true,
      },
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(400).json({ errorMessage: err });
      });
  } else {
    await Branch.findOne({
      include: {
        model: Employee,
        as: "employees",
      },
      where: {
        branchId: branchId,
      },
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.status(400).json({ errorMessage: err });
      });
  }
});

//add branch
router.route("/add").post(async (req, res) => {
  const { branchName, branchAddress, zipcode, email, telephone } = req.body;
  await Branch.create({
    branch_name: branchName,
    branch_address: branchAddress,
    zip_code: zipcode,
    email: email,
    telephone_no: telephone,
  })
    .then((result) => {
      console.log(result);
      if (result) {
        res.status(200).json({ succeed: true });
      } else {
        res.status(200).json({ succeed: false });
      }
    })
    .catch((err) => {
      res.status(400).json({ errorMessage: err });
    });
});

//edit branch
router.route("/edit/:id").patch(async (req, res) => {
  const { branchName, branchAddress, zipcode, email, telephone } = req.body;
  const branchId = req.params.id;

  await Branch.update(
    {
      branch_name: branchName,
      branch_address: branchAddress,
      zip_code: zipcode,
      email: email,
      telephone_no: telephone,
    },
    {
      where: {
        branchId: branchId,
      },
    }
  )
    .then((result) => {
      console.log(result);
      if (result) {
        res.status(200).json({ succeed: true });
      } else {
        res.status(200).json({ succeed: false });
      }
    })
    .catch((err) => {
      res.status(400).json({ errorMessage: err });
    });
});

//delete branch
router.route("/delete/:id").delete(async (req, res) => {
  // const branchId = req.query.branchId
  const branchId = req.params.id;
  await Branch.destroy({
    where: {
      branchId: branchId,
    },
  })
    .then((result) => {
      console.log(result);
      if (result !== 0) {
        res.status(200).json({ succeed: true });
      } else {
        res.status(200).json({ succeed: false });
      }
    })
    .catch((err) => {
      res.status(400).json({ errorMessage: err });
    });
});

module.exports = router;
