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
console.log(sayIt(mike));