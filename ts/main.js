class Student
{
    constructor(name, age, id)
    {
        this.name = name;
        this.age = age;
        this.id = id;
    }
}

var anuj = new Student("anuj", 21, "23MCCE16");
Student.prototype.print = function()
{
    console.log(`${this.name}`);
}
anuj.print();
(function()
{
    console.log("hello this is self executing function");
})();
(function()
{
    console.log("hello");
})();
