const jsonString = '[{"name":"Tom", "age":30}, {"name":"Jerry", "age":3}]';

const objs = JSON.parse(jsonString);

objs.forEach(obj => console.log(`${obj.name} is ${obj.age} years old.}`));