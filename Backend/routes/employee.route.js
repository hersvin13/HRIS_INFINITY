// const router = require('express').Router()
// const { where } = require('sequelize')
// const Employee =  require('../db/models/employee.model')

// router.route('/:param_id').get(async (req, res) => {
//     const Dept_ID = req.params.param_id
//     await Employee.findAll({
//                 where: {
//                     col_dept: Dept_ID
//                 }
//             })
//     .then((empDEpt) => {
//         if (empDEpt && empDEpt.length > 0) {
//             res.status(200).json({ success: true, employees: empDEpt }); // Include the department data
//         } else {
//             res.status(400).json({ success: false });
//         }
//     })
//     .catch((error) => {
//         console.error(error);
//         res.status(500).json({ success: false, error: "Internal server error" });
//     });
//   });



// module.exports = router

const router = require('express').Router()
const { where } = require('sequelize')
// const Employee =  require('../db/models/employee.model')
const { Department, Employee } = require('../db/models/associations');

router.route('/:param_id').get(async (req, res) => {
    const Dept_ID = req.params.param_id
    await Employee.findAll({
                where: {
                    col_dept: Dept_ID
                },
                include: {
                    model: Department, // Assuming your Employee model is imported
                    required: true,
                    // as: 'deptaa', // Use the alias specified in the Department-Employee association
                    // attributes: [],
                  }
            })
    .then((empDEpt) => {
        if (empDEpt && empDEpt.length > 0) {
            res.status(200).json({ success: true, employees: empDEpt }); // Include the department data
        } else {
            res.status(202).json({ success: false });
        }
    })
    .catch((error) => {
        console.error(error);
        res.status(500).json({ success: false, error: "Internal server error" });
    });
  });



module.exports = router


// const router = require('express').Router();
// const { Department, Employee } = require('../db/models/associations'); // Import models from associations.js

// router.route('/:param_id').get(async (req, res) => {
//   const Dept_ID = req.params.param_id;
//   try {
//     const empDept = await Employee.findAll({
//       where: {
//         col_dept: Dept_ID,
//       },
//       include: [Department],
//     });

//     console.log('empDept:', empDept); // Debugging line

//     if (empDept && empDept.length > 0) {
//       const employees = empDept.map((employee) => ({
//         col_id: employee.col_id,
//         col_Fname: employee.col_Fname,
//         col_Mname: employee.col_Mname,
//         col_Lname: employee.col_Lname,
//         col_departmentName: employee.Department.col_departmentName,
//       }));
//       res.status(200).json({ success: true, employees });
//     } else {
//       res.status(400).json({ success: false });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, error: 'Internal server error' });
//   }
// });

// module.exports = router;



// module.exports = router
// const router = require('express').Router();
// const { where, join } = require('sequelize');
// const Employee = require('../db/models/employee.model');
// const Department = require('../db/models/department.model'); // Import the Department model

// router.route('/:param_id').get(async (req, res) => {
//   const Dept_ID = req.params.param_id;
//   await Employee.findAll({
//     where: {
//       col_dept: Dept_ID,
//     },
//     include: [Department], // Include the Department model in the query
//   })
//     .then((empDept) => {
//       if (empDept && empDept.length > 0) {
//         const employees = empDept.map((employee) => ({
//           col_id: employee.col_id,
//           col_Fname: employee.col_Fname,
//           col_Mname: employee.col_Mname,
//           col_Lname: employee.col_Lname,
//           col_departmentName: employee.Department.col_departmentName, // Access department name through the Department model
//         }));
//         res.status(200).json({ success: true, employees });
//       } else {
//         res.status(400).json({ success: false });
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//       res.status(500).json({ success: false, error: 'Internal server error' });
//     });
// });

// module.exports = router;


// const router = require('express').Router();
// const { where } = require('sequelize');
// // const Employee = require('../db/models/employee.model');
// // const Department = require('../db/models/department.model');
// const { Department, Employee } = require('../db/models/associations'); // Import models from associations.js



// router.route('/:param_id').get(async (req, res) => {
//   const Dept_ID = req.params.param_id;
//   try {
//     const empDept = await Employee.findAll({
//       where: {
//         col_dept: Dept_ID,
//       },
//       include: [Department],
//     });

//     console.log('empDept:', empDept); // Debugging line

//     if (empDept && empDept.length > 0) {
//       const employees = empDept.map((employee) => ({
//         col_id: employee.col_id,
//         col_Fname: employee.col_Fname,
//         col_Mname: employee.col_Mname,
//         col_Lname: employee.col_Lname,
//         col_departmentName: employee.Department.col_departmentName,
//       }));
//       res.status(200).json({ success: true, employees });
//     } else {
//       res.status(400).json({ success: false });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, error: 'Internal server error' });
//   }
// });

// module.exports = router;
