const Department = require('./department.model');
const Employee = require('./employee.model');
const Branch = require('./branch.model');

Department.hasMany(Employee, { foreignKey: 'col_dept' });
Employee.belongsTo(Department, { foreignKey: 'col_dept' });

Branch.hasMany(Employee, {foreignKey: 'col_branch'});
Employee.belongsTo(Branch, { foreignKey: 'col_branch'});

module.exports = { Department, Employee, Branch };
