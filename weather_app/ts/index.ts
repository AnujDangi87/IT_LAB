interface Person{
    age:number, 
    name:string,
    say():string
}

let mike:Person={
    age:25,
    name:"mike",
    say:function(){
        return `My name is ${this.name} and I'm ${this.age} years old!`;
    }
}

function sayIt(person:Person)
{
    return person.say();
}
console.log(mike.name);

console.log(sayIt(mike));
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

