import { Console } from "console";

let sales: number = 123_123_123;
let course: string = "sfasdf";
let isPublished = true;
let student: [number, string, boolean, boolean] = [1, "Rob", true, false];
const enum LanguageType {
  French = 1,
  Cymraeg = 2,
}

let myLang: LanguageType = LanguageType.Cymraeg;
console.log(myLang);

function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear < 2022) return income * 1.5;
  return income * 1.5;
}

type Employee = {
    id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
  id: 1,
  name: "Rob",
  retire: (date: Date) => {
    console.log(date);
  },
};

function kgToLbs(weight: number | string) {
    //Narrowing
    if(typeof weight === 'number')
        return weight * 2;
    else
        return parseInt(weight) * 2;
}

kgToLbs(10);
kgToLbs('10');

type Draggable = {
    drag: () => void
};

type Resizeable = {
    resize: () => void
};

type UIWidget = Draggable & Resizeable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

type Customer = {
    birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()};
}

let customer = getCustomer(1);
//Optional property access operator
// code below replaces if (customer 1== null && customer !== undefined)
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// code below replaces: if (customers !== null && customers !== undefined)
// customers?[0]

// Optional call = only executes function below if log variable references an actual function, else we will get undefined
let log: any = null;
log?.('a');


