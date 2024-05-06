const fs = require('fs').promises;
const { join } = require('path');

const readCacauTrybeFile = async () => {
  const path = '/files/cacauTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.find((chocolate) => chocolate.id === id);
  // aqui usa-se find porque quero apenas um elemento, e o retorno será o primeiro encontrado de acordo com o seletor
}

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates.filter((chocolate) => chocolate.brandId === brandId);
  // aqui usa-se filter porque quero retornar uma lista de elementos
}

const findChocolateByName = async (query) => {
  const cacauTrybe = await readCacauTrybeFile();
return cacauTrybe.chocolates
.filter((chocolate) => chocolate.name.toLowerCase().includes(query.toLowerCase()));
};

module.exports = {
    getAllChocolates,
    getChocolateById,
    getChocolatesByBrand,
    findChocolateByName,
};