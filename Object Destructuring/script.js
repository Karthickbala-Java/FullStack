const person = {
  name: "John",
  age: 30,
  city: "New York",
  email: "john@example.com",
};

// let { name, age, city, email } = person;
// console.log(name);
// we can modify those object name
let { name: userName } = person;
console.log(userName);

let { name, age, phno = "9799737321", ...rest } = person;
console.log(rest);
