const conn = require('./connection');

const insert = (person) => conn.execute(
  `INSERT INTO people
    (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)`, // os "?" marcam os valores que serão substituídos pelos valores dentro da consulta SQL, que são os valores do array que está no segundo parâmetro do método execute().
  [person.firstName, person.lastName, person.email, person.phone],
); // prepared statement. Serve como um molde para as consultas SQL. Os parâmetros das prepared statements não devem ser vinculadas diretamente na consulta SQL (utilizando concatenação de string, por exemplo).

const findAll = () => conn.execute('SELECT * FROM people');
const findById = (id) => conn.execute('SELECT * FROM people WHERE id = ?', [id]);
const update = (person, id) => conn.execute(
  `UPDATE people SET first_name = ?, last_name = ?, email = ?, phone = ?
    WHERE id = ?`,
  [person.firstName, person.lastName, person.email, person.phone, id],
);
const remove = (id) => conn.execute('DELETE FROM people WHERE id = ?', [id]);

module.exports = {
  insert,
  findAll,
  findById,
  update,
  remove,
};