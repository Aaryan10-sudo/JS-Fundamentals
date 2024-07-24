/*
 let multi = [1,2,3,4]
let output = multi.map((value,index)=>{
    return value * 2; //map method always return
})
console.log(output); 
*/

//Use map method if both input and output are arrays and both input and outputs length are same.
/* 
let list = ['Aaryan','Sharma']
let op = list.map((value,index) => {
    return 5
} )
console.log(op) 
*/

/* let list1 = ['a','b','c']
let op2 = list1.map((value,index) => {
    return `${value}${index}`
})
console.log(op2)
 */

/* 
let array = ['aarya','arya','r']
let teeest =  array.map((value,index) => {
    return value.toUpperCase() + 'N';
})
console.log(teeest)
*/

/*
 let array = [1,3,4,5]
let test = array.map((value,index)=>{
    if(value % 2 == 0){
    return value*0;
    }
    else{
        return value*100;
    }
})
console.log(test)
 */

/* 
let array = ['a','a','r','y','a','n']
let test = array.map((value,index)=>{
    if (index === 0){
        return value.toUpperCase()
    }
    else{
        return value
    }
})
console.log(test)  
*/

//Split => convert string into array
//Join => convert array into string

/* 
console.log('Aaryan'.split('a'))  //split replaces the string choosen into comma
let a = 'aaryan';
console.log(typeof(a))
let b = a.split(a);
console.log(typeof(b))
console.log(b.join('')) 
*/

/* console.log('My name is Aaryan Sharma'.split(" ")) */

/*
 let a = 2;
for(let i =1; i<=10; i++){
    console.log(`2 x ${i} = ${i*a}`)
}
*/

//i=1 => (initialization) This condition only runs at first
//i <= b => (condition) This condition run until it meets its requirement
//i++ => (after thought/increment) This condition is executed everytime the loop body is executed
//For loop repeats until a specified condition evaluates to false

//filter
//in filter return works on true and false basis if true output will be displayed if false empty array
//filters outputs elements must be inputs element

/*
 let array = ['a','b','c']
let test = array.filter((value,index)=>{
    if(value === 'a'){
        return true
    }
    else{
        return false
    }
})
console.log(test) 
*/

/*
let array = [1,2,3,4]
let test = array.filter((value,index)=>{
    if(value % 2 != 0){
        return false
    }
    else{
        return true
    }
})
console.log(test) 
*/

/* 
let array = [1,3,33,89,55,98,2,4,6,90]
let test = array.filter((value,index)=>{
   if(value > 55){
    return true
   }
})
console.log(test) 
*/

/*
 let array = ["ram","hari","shyam"]
let test = array.filter((value,index)=>{
    if(value.length > 3){
        return true
    }
})
console.log(test) 
*/

/*
 let input = ["","ram","hari",0,1,2,null,undefined,true,false]
let output = input.filter(Boolean)
console.log(output) 
*/

//find
//It only return first match

/*
let array = [1,2,3,4]
let output = array.find((value,index)=>{
    return true;
})
console.log(output);
*/

//includes only gives true or false

/* 
let list = ["Aaryan","Ram","Hari"]
let test = list.includes('Aaryan')
if(test == true){
    console.log(`You are recognized`)
}
else{
    console.log('Not recognized')
} 
*/

//Push => push value to last element of an array
//Pop => removes value from last element of an array
//unshift => push value to the first element of an array
//shift => removes first element of an array

/*  
let list = ['aaryan']
list.push('sharma')
console.log(list)
list.pop()
console.log(list)
list.unshift('Hello')
console.log(list)
list.shift()
console.log(list)
*/

//sort
/* 
let list = ['a','z','r','b']
list.sort()//number sort does not work
console.log(list) 
*/

/* 
let list = [1,3,10,4,7,6];
list.sort((a,b)=>{
    return a-b;
})
console.log(list) 
*/

//Find the sum of all even ele,ents of an array
/* 
 let array = [1,2,3,4,5,6]
let test = array.filter((value,index)=>{
    if(value % 2 == 0){
        return true
    }
}).reduce((previous,current)=>{
  return previous + current;
},0)
console.log(`The sum of even numbers is ${test}`)
*/

//set => filters duplicate data
/* 
let list = [9, 7, 6, 1, 6, 3, 7, 6, 5, 7];
let output = [...new Set(list)];
console.log(output);
*/
