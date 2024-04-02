export default class Student {
  private _registration: string;
  private _name: string;
  private _grade: number[];
  private _projectGrades: number[];
 

  constructor(registration: string, name: string) {
    this._name = name;
    this._registration = registration;
    this._grade = [];
    this._projectGrades = [];
  }

  getRegistration(): string {
    return this._registration;
  }

  setRegistration(value: string) {
    this._registration = value;
  }

  getName(): string {
    return this._name;
  }

  setName(value: string) {
    if(value.length < 3) {
      throw new Error('Name must be at least 3 characters!')
    }
    this._name = value;
  }

  getGrade(): number[] {
    return this._grade;
  }

  setGrade(value: number[]) {
    if (value.length > 4) {
      throw new Error('The student can only have 4 exams grades!')
    }
    this._grade = value;
  }

  getProjectGrades(): number[] {
    return this._projectGrades;
  }

  setProjectGrades(value: number[]) {
    if(value.length > 2) {
      throw new Error('The student can only have 2 project grades!')
    }
    this._projectGrades = value;
  }

  sumGrades(): number {
    return [...this._grade, ...this._projectGrades]
      .reduce((prevGrade, grade) => {
        const nextGrade = grade + prevGrade;

        return nextGrade;
      }, 0);
  }

  sumAverageGrade(): number {
    const sumGrades = this.sumGrades();
    const divider = this._grade.length + this._projectGrades.length;

    return Math.round(sumGrades / divider);
  }
}