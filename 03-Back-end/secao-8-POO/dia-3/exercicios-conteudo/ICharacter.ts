interface Character {
  name: string;
  specialMove: string;
}

interface DbCharacter extends Character {
  id: number;
}

interface IModel {
  create(char: Character): Promise<DbCharacter>;
  update(id: number, char: Character): Promise<DbCharacter>;
  delete(id: number): Promise<boolean>;
  getAll(): Promise<DbCharacter[]>;
  getById(id: number): Promise<DbCharacter>;
}

class LocalDbModel implements IModel {
  async create(char: Character) {
    const lastId = db.length > 0 ? db[db.length - 1].id : 0;
    const newChar = { id: lastId + 1, ...char };
    db.push(newChar);
    return newChar;
  }

  async findIndexById(id: number) {
    const index = db.findIndex((character) => character.id === id);
    if (index < 0) throw new Error('Character not found');
    return index;
  };

  async update(id: number, character: Character) {
    const indexToUpdate = await this.findIndexById(id);
    db[indexToUpdate] = { ...db[indexToUpdate], ...character };
    return db[indexToUpdate];
  };

  async delete(id: number) {
    const indexToDelete = await this.findIndexById(id);
    const deletedItem = db.splice(indexToDelete, 1);
    if (deletedItem.length > 0) return true;
    return false;
  };

  async getAll() { return db; };

  async getById(id: number) {
    const indexToGet = await this.findIndexById(id);
    return db[indexToGet];
  };
}

class CharacterService {
  constructor(readonly model: LocalDbModel) {}
  async create(char: Character) {
    const newChar = await this.model.create(char);
    return ({ status: 201, data: newChar });
  }
}

const db: DbCharacter[] = [];