const conn = require('./connection');

const insert = (person) => conn.execute(
  'INSERT INTO people (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)', // os "?" marcam os valores que serão substituídos pelos valores dentro da consulta SQL, que são os valores do array que está no segundo parâmetro do método execute().
  [person.firstName, person.lastName, person.email, person.phone],
); // prepared statement. Serve como um molde para as consultas SQL. Os parâmetros das prepared statements não devem ser vinculadas diretamente na consulta SQL (utilizando concatenação de string, por exemplo).

module.exports = {
  insert,
};