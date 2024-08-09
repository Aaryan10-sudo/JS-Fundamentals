/*
Datatype
STRING
NUMBER
BOOLEAN */

/* 
let a = "aaryan";
b = a.toUpperCase()
console.log(b) 
*/

/* 
let name = "Aaryan's console";
console.log(name) 
*/
// We cannot use double quote inside double quote and so on. Duplicated "", '',`` is literal error

//String Concatenation
/*
let c = "radhey" + " radhey";
console.log(c) 
*/

//String is powerful as compared to numbers
/* 
console.log(1 + "1")
console.log("1" + 2 + 3 + 4)
console.log(1 + 2 + 3 + "4")
 ///If we add a number and string, the interpreter converts the number to string and concatenates both together.
let name2 = "Aaryan";
console.log(name2);
name2 = "Aryan";
console.log(name2);

 /// We cannot declare the same variable name twice it throws error
let name3 = "aaryan"
console.log(name);
 ///We cannot call variable if it is not defined
console.log(`Hello ${name3}`)
let num1 = 1;
let num2 = 2;
let sum = `The sum of ${num1} and ${num2} is ${num1 + num2}`;
console.log(sum);
*/

/* 
let firstName = 'Aaryan'
let lastName = 'Sharma'
let location = 'Kapan'
let age = 20;
console.log(`My Full Name is ${firstName + lastName}. My location is ${location}. I am ${age} years old`) 
*/

/* Boolean => True or False
Falsy value = 0 , "" , null , undefined
Empty string and 0 are falsy value others are truthy */

// == , === , > , < , >= , <=, !=
// && operator
// || or operator
// ! not operator

/* 
console.log(1 == "1")//checks only the value
console.log(1 === "1")//checks value as well as datatypes
*/

/* 
let test = 17;
if(test < 18){
    console.log("You cannot enter the bar")
}
else{
    console.log('You can enter the bar')
} 
*/

/* 
let name4 = "Aaryan"
if(name4 === "Dada"){
    console.log("Hello Dada")
}
else if(name4 === "Aaryan"){
    console.log('Hello Aaryan')
}
else{
    console.log('HEhe')
} 
*/

/* 
let siuu = true
console.log(!siuu)

let name5 = "Aar";
if(name5.length > 3){
    console.log(`${name5} can enter`)
}
else{
    console.log(`${name5} cannot enter`)
} 
*/

/* 
let name = "SUMaN ChoR";
console.log(name.toLowerCase())
console.log(name.toUpperCase()) 
*/
/* 
let a = 10;
let b = "10";
if (a == b) {
  console.log(true);
} else {
  [console.log(false)];
}
*/

//undefined means variable is decalered but not initialize.
/* 
let a;
console.log(a); 
*/

//null means variable is defined but initialization will be null;
/*
 let b = null;
console.log(b); 
*/
