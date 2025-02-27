"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.vari = void 0;
var first = ["anuj", "ajay"];
first.push("node");
console.log(first);
var Status;
(function (Status) {
    Status[Status["no"] = 0] = "no";
    Status[Status["yes"] = 1] = "yes";
})(Status || (Status = {}));
console.log(Status.yes);
var code;
code = "hell0";
console.log(code);
code = 45;
console.log(code);
var second = [["anuj", 21], ["ajay", 25]];
console.log(second.length, typeof (second));
console.log(second);
function hi(a, b) {
    return a + b;
}
var sum = function (a) { return a + 100; };
console.log(sum(5));
//Type assertion
var cod = "123";
var empley = cod;
console.log(empley);
var person = {
    name: "anuj",
    SSN: 123
};
// person.SSN = 1244; -> will give compiler error because its a read-only property.
console.log(person);
var ved = {
    name: "ved",
    SSN: 1,
    country: "india"
};
console.log(ved);
//TypeScript class
var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empCode = code;
        this.empName = name;
    }
    Employee.prototype.getSalary = function () {
        return 100000;
    };
    return Employee;
}());
var obj = new Employee(1, "anuj");
console.log(obj.getSalary());
//Inheritance in class and 
var NewEmp = /** @class */ (function (_super) {
    __extends(NewEmp, _super);
    function NewEmp(id, name, loc) {
        var _this = _super.call(this, id, name) || this;
        _this.location = loc;
        return _this;
    }
    //public -> for all classes and outside class
    //private -> only in the class
    //protected -> same as private but have access for deriving(inheriting) class.
    NewEmp.pi = 3.14; //static variable can be accessed directly with object creation
    return NewEmp;
}(Employee));
var newObj = new NewEmp(2, "ajay", "hyd");
console.log(newObj + " " + NewEmp.pi);
//TypeScript-Module
exports.vari = "this is exported value";
