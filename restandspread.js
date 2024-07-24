//REST
/* rest operator is always placed at last
let { name, country, ...rest } = {
  name: "aaryan",
  age: 20,
  location: "KTM",
  country: "Nepal",
};
console.log(name);
console.log(country);
console.log(rest);
*/

/* 
let sum = (a, ...b) => {
  console.log(a);
  console.log(b);
  console.log(a + b);
};
sum(1, 2, 3, 4, 5);
 */

/* 
let [a, b, c, ...d] = [1, 2, 3, 4, 5, 6];
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(a + b + c + d);
 */

//SPREAD
//spread operator are wrapper opener
/*
let list = [1, 2, 3];
let list1 = ["Aaryan", "Sumon", "Probean"];
let output = ["Ram", "Hari", 9, 5, ...list, "Hey", ...list1];
console.log(output);
*/

/* 
let list = {
  name: "Aaryan",
  age: 50,
  location: "Kathmandu",
};
let list2 = { ...list, country: "Nepal", isMarried: true };
console.log(list2);
*/
