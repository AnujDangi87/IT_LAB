const jsonString = '{"name" : "Lucy","age":28,"city":"Los Angeles"}';

const obj = JSON.parse(jsonString);

obj.age += 1;
//obj.age = Number(obj.age) + 1;

const updatedJsonString = JSON.stringify(obj);

console.log(updatedJsonString);
