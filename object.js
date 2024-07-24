//Object
//if array is a collection of values objects are a collection of key calue pairs. Key alue pairs are called properties

//get value

// let yoyo = () => {
//   let test = {
//     name: document.getElementById("name").value,
//     age: 10,
//     location: "Kapan",
//   };
//   alert(`Hello ${test.name}`);
// };

//changing the value
/*
test.name = "Rajesh Dai";
console.log(test); 
*/

//delete value
/* 
delete test.location;
console.log(test); 
*/

/* 
let yoyo = () => {
  let test = {
    name: ["aaryan", "ram", "hari"],
    email: ["lazyfox916@gmail.com", "ram@gmail.com", "hari@gmail.com"],
  };
  b = test.email;
  console.log(b);
  c = document.getElementById("email").value;
  let hehe = b.includes(c);
  if (hehe === true) {
    alert("You can proceed");
  } else {
    alert("Invalid Email");
  }
};
*/

/* 
let info = {
  name: "Aaryan",
  location: {
    country: "Nepal",
    province: "Bagmati",
    city: "Kathmandu",
  },
  email: ["abc@gmail.com", "cab@gmail.com"],
  age: () => {
    console.log("I am 20 years old.");
  },
};
info.age();
console.log(info.name);
console.log(info.location.province);
console.log(info.email[0]);
*/

/* 
let product = [
  { name: "mobile", price: 15000 },
  { name: "battery", price: 5000 },
  { name: "radio", price: 3000 },
];
let output = product.map((value, index) => {
  return value.price;
});
console.log(output)
let op2 = output.reduce((pre, cur) => {
  return pre + cur;
});
console.log(op2); 
*/

//array sort according to length of an element
/* 
let list = ["Aa", "Aaryan", "A", "Aar", "Aary", "Aarya"];
let output = list.sort((a, b) => {
  return a.length - b.length;
});
console.log(output);
 */

/* convert object into array
let list = {
  name: "Aaryan",
  age: 20,
  location: "Kathmandu",
};
let output = Object.keys(list);
let output1 = Object.values(list);
let output2 = Object.entries(list);

console.log(output);
console.log(output1);
console.log(output2);//arrays of arrays
 */

/* Convert array into object.
let array = [
  ["name", "Aaryan"],
  ["age", 20],
  ["location", "Kathmandu"],
];
let output = Object.fromEntries(array);
console.log(output);
console.log(output.name);
*/
