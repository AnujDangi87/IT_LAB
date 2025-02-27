
let first:Array<string> = ["anuj", "ajay"];
first.push("node");

console.log(first);

enum Status{
    no,
    yes
}

console.log(Status.yes);

let code:(string|number);
code = "hell0";
console.log(code);
code = 45;
console.log(code);

let second:Array<[string, number]> = [["anuj", 21], ["ajay", 25]];
console.log(second.length, typeof(second));
console.log(second);

function hi(a:string, b:string):string;

function hi(a:number, b:number):number;

function hi(a:any, b:any):any{
    return a+b;
}

let sum= a => a+100;
console.log(sum(5));

//Type assertion
let cod:any = "123";
let empley = <number>cod;
console.log(empley);

//Read only properties
interface Citizen{
    name:String;
    readonly SSN : number;          //Same as final in java keyword.Only modified 
}

let person:Citizen = {
    name : "anuj",
    SSN : 123
}

// person.SSN = 1244; -> will give compiler error because its a read-only property.

console.log(person);

//Extending interfaces
interface NewCitizen extends Citizen{
    country:string;
}

let ved:NewCitizen = {
    name : "ved",
    SSN : 1,
    country:"india"
}

console.log(ved);

//TypeScript class
class Employee{
    empCode:number;
    empName:string;

    constructor(code:number, name:string)
    {
        this.empCode = code;
        this.empName = name;
    }

    getSalary():number {
        return 100000;
    }
}

let obj = new Employee(1, "anuj");

console.log(obj.getSalary());

//Inheritance in class and 
class NewEmp extends Employee{
    public location : string;       //Access or Data modifier
    //public -> for all classes and outside class
    //private -> only in the class
    //protected -> same as private but have access for deriving(inheriting) class.

    static pi:number = 3.14;        //static variable can be accessed directly with object creation

    constructor(id:number, name:string, loc:string)
    {
        super(id, name);
        this.location = loc;
    }
}

let newObj = new NewEmp(2, "ajay", "hyd");

console.log(newObj+" "+NewEmp.pi);

//TypeScript-Module

export let vari:string = "this is exported value";
