const jsonString = '{"company":"Tech Corp", "employees":[{"name":"Henry","department":"R&D"},{"name":"lzzy", "department":"Marketing"}]}';

const company = JSON.parse(jsonString);

company.employees.forEach(employee => console.log(`${employee.name} works in ${employee.department}`));