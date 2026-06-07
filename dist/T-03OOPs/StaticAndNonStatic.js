"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    static companyName = "Ck tech";
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
let emp = new Employee(101, "allen");
console.log(emp.id);
console.log(emp.name);
console.log(Employee.companyName);
console.log(Employee.companyName);
