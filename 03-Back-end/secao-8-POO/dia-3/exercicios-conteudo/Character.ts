// abstract class Character {
//   abstract talk(): void;
//   abstract specialMove(): void;

//   static showChar(character: Character): void {
//     character.talk();
//     character.specialMove();
//   }
// }

// class MeleeCharacter extends Character {
//   constructor(private _name: string) {
//     super();
//   }
  
//   talk(): void {
//     console.log(`${this._name} diz: Olá, sou o personagem 1!`);
//   }

//   specialMove(): void {
//     console.log(`${this._name} sai.`);
//   }
// }

// class LongRangeCharacter extends Character {
//   constructor(private _name: string) {
//     super();
//   }
//   talk(): void {
//     console.log(`${this._name} diz: Olá, sou o personagem 2!`);
//   }

//   specialMove(): void {
//     console.log(`${this._name} sai.`);
//   }
// }

// const char1 = new MeleeCharacter('Yoshi');
// const char2 = new LongRangeCharacter('Samus');

// // char1.talk();
// // char1.specialMove();
// // char2.talk();
// // char2.specialMove();
// Character.showChar(char1);
// Character.showChar(char2);