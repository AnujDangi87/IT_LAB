var mike = {
    age: 25,
    name: "mike",
    say: function () {
        return "My name is ".concat(this.name, " and I'm ").concat(this.age, " years old!");
    }
};
function sayIt(person) {
    return person.say();
}
console.log(mike.name);
console.log(sayIt(mike));
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
