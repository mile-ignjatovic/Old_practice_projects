export class User {

  public id: number;
  public name: string;
  public lastName: string;
  public yearOfBirth: number;

  constructor(userID: number, name: string, lastName: string, yearOfBirth: number) {
    this.id = userID;
    this.name = name;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
  }
}
