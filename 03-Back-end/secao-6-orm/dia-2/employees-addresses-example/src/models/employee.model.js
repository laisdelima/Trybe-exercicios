module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'employees', // nome da tabela no banco
    underscored: true,
  });

  Employee.associate = (models) => {
    Employee.hasOne(models.Address,
      { foreignKey: 'employeeId', as: 'addresses' }); // a tabela employees tem uma chave estrangeira chamada employeeId, que referencia a tabela addresses. O nome da chave estrangeira na tabela addresses é employeeId.
  };

  return Employee;
};