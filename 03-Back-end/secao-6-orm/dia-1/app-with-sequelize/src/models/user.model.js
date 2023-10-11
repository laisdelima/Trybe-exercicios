const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  });
  (async () => {
    await sequelize.sync({ force: true }); // toda vez que o servidor for reiniciado, a tabela será recriada. Isso é útil para testes, mas não para produção.
    // As funções vão aqui
  })();
  return User;

};

// criando com create
const sara = await User.create({ // async porque se comunica com o banco de dados.
  fullName: 'Sara Silva Santos',
  email: 'sara.ss@trybe.com',
});

// console.log(sara instanceof User);
console.log(sara.fullName); // "Sara Silva Santos"

sara.fullName = "Jane Doe";

// O nome ainda está "Sara Silva Santos" no banco de dados!

await sara.save(); // altera o nome e salva no DB.

// ------------------------
sara.set({}) // atualiza diversos campos de uma vez só, e todas as alterações são salvas no banco de dados.
await sara.save();

// ------------------------
const jane = await User.create({
  fullName: "Jane Doe",
  email: "jane.doe@trybe.com",
  });
  
  jane.email = "ada.doe@trybe.com";
  await jane.update({ fullName: "Ada Joe" });
  
  // O banco de dados agora tem "Ada Joe" para o nome, mas o email ainda é "jane.doe@trybe.com".
  
  await jane.save();
  // O banco de dados agora tem "ada.doe@trybe.com" para o email.
  
module.exports = UserModel;