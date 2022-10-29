"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
let sales = 123123123;
let course = "sfasdf";
let isPublished = true;
let student = [1, "Rob", true, false];
let myLang = 2;
console.log(myLang);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.5;
    return income * 1.5;
}
let employee = {
    id: 1,
    name: "Rob",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2;
    else
        return parseInt(weight) * 2;
}
kgToLbs(10);
kgToLbs('10');
let textBox = {
    drag: () => { },
    resize: () => { }
};
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log('a');
//# sourceMappingURL=index.js.map