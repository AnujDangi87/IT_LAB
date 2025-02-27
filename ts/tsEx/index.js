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
console.log(sayIt(mike));
