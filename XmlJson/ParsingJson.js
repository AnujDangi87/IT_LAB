const jsonString = '{"name" : "john","age":"30","city":"New York"}';

const obj = JSON.parse(jsonString);
console.log(obj.name);
console.log(obj.city);