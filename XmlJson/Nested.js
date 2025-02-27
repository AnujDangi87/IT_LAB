const jsonString = '{"name":"Mike", "age":"35", "address":{"street":"5th Avenue", "city":"New York"}}';

const obj = JSON.parse(jsonString);

console.log(obj.address.city);