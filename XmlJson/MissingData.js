const jsonString = '{"name":"George", "age":40}';

const user = JSON.parse(jsonString);

console.log(user.city||"City not provided");