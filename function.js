//Function definition, Call Function , Pass value to function , function with return , arrow function
//Function syntax
/* function test() {
  //Function define
  console.log("Hello World !");
}
test(); */
//Function Call
//Function will not execute unless it is call. We have to call function to execute the function code block

/*Javascript works line by line */
/* let sum = function () {
  console.log("Hehe");
};
console.log("a");
sum();
console.log("b"); */

//Passing value to function
/* let sum1 = function (a, b, c) {
  //Parameters
  console.log(a + b + c);
};
sum1(1, 2, 3);  */ //Arguments

//It is not necessary to have same number of arguments and parameters

//Default value
/* let test2 = function (a = 5, b, c = 3) {
  console.log(a);
  console.log(b);
  console.log(c);
};
test2(1, 2); */

//Function return
/* let sum3 = function (z, y) {
  let f = z + y;
  return f;
};
let output = sum3(4, 6);
console.log(output); */
//Function without return, call normally : sum()
//Function with return , call by storing it in variable like : let output = sum()

//Arrow function syantax
/* let sum7 = () => {
  console.log("Hola");
};
sum7();

let sum9 = (num1, num2) => {
  console.log(num1 + num2);
};
sum9(1, 3); */

// Javascript is a dynamic language because a variable can be show different value at a different time

//Return always returns 1 value at a time i.e last digit
/* let hey = () => {
  return 1, 2, 3, 4;
};
let hi1 = hey();
console.log(hi1); */

//Date in javascript
// console.log(new Date().toLocaleString());
/* console.log(new Date().toLocaleDateString());
console.log(new Date().toTimeString());
console.log(new Date().toDateString());
console.log(new Date().getDate());
console.log(new Date().getDay());
console.log(new Date().getDay()); */

//call back function
//A callback function is a funcction passed into another function as an argument.

/* let fun1 = () => {};
let fun2 = () => {};
fun1(fun2);

//fun1 is higher order function

//Higher order function
//A function which takes argument as function.A function which return another function is called higher
//order function*/
function sum() {
  //function definition
  console.log("Hello world");
}
sum();

//arrow function
let a = (a, b) => {
  console.log(`${a},${b}`);
};
a(1, 2);
