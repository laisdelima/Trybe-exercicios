const EmployeeService = require('../services/employee.service');

const getAll = async (_req, res) => {
  try {
    const employees = await EmployeeService.getAll();
    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
  try {
    const { id }= req.params;
    const employees = await EmployeeService.getById(id);

    if (!employees) {
      return res.status(404).json({ message: 'Pessoa não encontrada' });
    }
    return res.status(200).json(employees);
  } catch (e) {
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
}

module.exports = {
  getAll,
  getById,
};