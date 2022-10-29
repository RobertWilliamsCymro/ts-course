
class Account {
  knownAs?: string;

  constructor(
    public readonly id: number,
    public owner: string,
    private _balance: number
  ) {}

  get balance(): number {
    return this._balance;
  }
  set balance(value: number) {
    if (value < 0) throw new Error("Invalid value");
    this._balance = value;
  }
}

let account = new Account(1, "rob", 10);
account.balance = 21;
console.log(account instanceof Account);
console.log(account.balance);

class SeatAssignment {
  //index signature property
  //lets you add dynamic properties?
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "mosh";
seats.A2 = "rob";

class Ride {
  //static makes a property belong to the class NOT the object
  private static _activeRides: number = 0;
  start() {
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }

  static get activeRides() {
    return Ride._activeRides;
  }
}
//Example of inheritance in Typescript
class Person {
  constructor(public firstName: string, public lastName: string) {}
  fullName(): string {
    return this.firstName + " " + this.lastName;
  }
}
class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string){
  super(firstName, lastName);
  }
  //example of method overriding
  override  fullName(): string {
    return "Lord " + super.fullName();
  }

}
let robStud = new Student(1, "Robert", "Williams");

console.log(robStud.fullName());