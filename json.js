let num = {
  name: "Aaryan",
  age: 20,
  location: "Kathmandu",
};
//JSON.stringify
let num1 = JSON.stringify(num); //Converts a Javascript Object value to a Object Notation(JSON) string
console.log(num1);

//JSON.parse
let num2 = JSON.parse(num1); //Converts a javascript object notation (JSON) string into object
console.log(num2);
