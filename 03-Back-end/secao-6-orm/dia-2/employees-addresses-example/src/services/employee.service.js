const { Address, Employee } = require('../models/');

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return users;
};

const getById = async (id) => {
  const employee = await Employee.findOne({
    where: { id },
    include: [{ model: Address, as: 'addresses' }],
    // include: [{ model: Address, as: 'addresses', attibutes: { exclude : ['number] } }], -> o método eager loading, utilizando o include, permite manipular quais dados serão retornados.
  });
  return employee;
}

module.exports = {
  getAll,
  getById,
};