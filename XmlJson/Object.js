const jsonString = '[{"name":"Tom", "age":30}, {"name":"Jerry", "age":3}]';

const users = JSON.parse(jsonString);

users.push({"name":"anuj","age":21});

const updated = JSON.stringify(users);

console.log(updated);