// funções que aplicação deve fazer

import { User } from './types/User';

// retorna uma lista contendo apenas os valores da propriedade name
// a função recebe um array de objetos (userList) do tipo User e retorna um array de strings com os nomes dos usuários
// userList.map((user: User) => user.name) = percorre cada objeto user no array userList e extrai o atributo 'name'
/// resultado: novo array contendo apenas os nomes dos usuários.
export const getUsers = (userList: User[]): string[] => userList.map((user: User) => user.name);

// users: array de objetos do tipo User
// repos: número representando a quantidade mínima de repositórios desejada
// filter: cria um novo array contendo apenas os objetos User que possuem repositories maior ou igual ao valor fornecido em repos
// map: exrai os nomes dos objetos que atendem ao critério de filtragem
// resultado: array com nomes dos usuários com pelo menos a quantidade mínima de repos especificada
export const getUsersByRepoQuantity = (users: User[], repos: number): string[] => users
  .filter((user) => user.repositories >= repos).map((user) => user.name);

// verifica se uma pessoa é a mais ativa da lista
// prev: valor acumulado = é o usuário com mais repos até o momento
// curr: valor atual = é o próximo usuário no array sendo processado
export const isMostActiveUser = (name: string, users: User[]): boolean => {
  const mostActiveUser = users.reduce(
    (prev, curr) =>
    (prev.repositories > curr.repositories ? prev : curr),
  );
  return mostActiveUser.name === name;
};
