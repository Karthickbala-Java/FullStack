let arr = ["john", "smith"];
// let [firstname, lastname] = arr;
// console.log(firstname);
let [firstname, lastname] = "john smith".split(" ");
// console.log(firstname);

[firstname, lastname] = [lastname, firstname];
// console.log(firstname);
let a = ["agdg", "adsbhha"];
const person = {
  name: "John",
  age: 30,
  city: "New York",
  email: "john@example.com",
  buisness: {
    no1: "clothing",
    no2: "Pit shop",
  },
};
let { name, age, city, email, buisness } = person;
let { no1, no2 } = buisness;
for (let [key, value] of Object.entries(person)) {
  console.log(key, value);
}
console.log(no1);
