// exercise 1
class Student {
  private _registration: string;
  private _name: string;
  private _examGrade: number[];
  private _projectGrade: number[];

  constructor(registration: string, name: string) {
    this._registration = registration;
    this._name = name;
    this._examGrade = [];
    this._projectGrade = [];
  }

  // getters & setters:
  getRegistration(): string {
    return this._registration;
  }

  setRegistration(value: string) {
    this._registration = value;
  }

  getName(): string {
    return this._name;
  }

  setName(newName: string) {
    if (newName.length < 3) {
      throw new Error('The name must have at least 3 characters!')
    }
    this._name = newName;
  }

  getExamGrade(): number[] {
    return this._examGrade;
  }

  setExamGrade(newGrade: number[]) {
    if (newGrade.length < 4 || newGrade.length > 4) {
      throw new Error('The student can only have 4 exam grades!')
    }
    this._examGrade = newGrade;
  }

  getProjectGrade(): number[] {
    return this._projectGrade;
  }

  setProjectGrade(newProjectGrade: number[]) {
    if (newProjectGrade.length < 2 || newProjectGrade.length > 2) {
      throw new Error('The student can only have 2 project grades!')
    }
    this._projectGrade = newProjectGrade;
  }
}

const personOne = new Student('202001011', 'Some student');

console.log(personOne);