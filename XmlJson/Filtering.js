const jsonString = '[{"name":"Tom", "age":30}, {"name":"Jerry", "age":3},{"name":"Anna", "age":22}]';

const objs = JSON.parse(jsonString);

const filteredObj = objs.filter(obj => obj.age > 24);
console.log(filteredObj);

