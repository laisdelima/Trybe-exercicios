const EmployeeModel = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false, // usa-se timestamp para não precisar usar createdAt e updatedAt.
    tableName: 'employees',
    underscored: true,
  });

  // aqui é onde declaramos as associações. A tabela Employees possui um Address, referenciado pelo campo employee_id, o model Employee deve chamá-la de addressess como descrito no 'as'.
  Employee.associate = (models) => {
    Employee.hasOne(models.Address, { foreignKey: 'employee_id', as: 'addresses' });
  }

  return Employee;
}

module.exports = EmployeeModel;