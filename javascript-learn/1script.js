// console.log('Hello')
// Single line comment 
/**
 * multiline comment
 */
/**
 * Variables
 */
// "use strict"
// let myName123 = "Hello World"
// let a = myName123;
// console.log(a);

let name = "keanu Reeves";
name = "John Cena";
console.log(name);

/**
 * DataTypes
 * 1 Primitive Datatypes
 * 1.1 Number
 */
let num =50;
console.log(typeof num);

//1.2 String
let str = "Hello World"
console.log(typeof str);

// 1.3 Boolean
let bool = false;
console.log(typeof bool);

// 1.4 null
let a = null;
console.log(typeof a);

// 1.5 undefined
let b;
console.log(typeof b);

/**
 * DataTypes
 * 2 Non Primitive Datatypes
 * 2.1 Object
 * 2.2 Array
 * 2.3 Function
 */

/**
 *  Operators
 *  Arthmetic Operator
 */
console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 5);
console.log(10 ** 5);

let number = 1;

console.log(++number);

/**
 * Comparison Operator
 */
let number1 = 5
let number2 = 7

console.log(number1==number2);
console.log(number1!=number2);
console.log(number1>number2);
console.log(number1<number2);
console.log(number1==number2);

/**
 * Logical Operator
 */
// logical OR, AND, NOT
console.log(4>3 || 5>4)
console.log(2>3 && 2>4)
console.log(!false)

/**
 * Condition
 */
let age = 19
let Name = 'sandy'

if(age>=18){
    if(Name == 'sandy'){
        console.log('You are eligible')
    }else{
        console.log('Name is not match')
    }
} else {
    console.log('You are not eligible')
}

let num1 = 10
let num2 = 15

if(num1 > num2){
    console.log('A is greater')
}else if(num2 > num1){
    console.log('B is greater')
}else{
    console.log('Both is equal')
}

let ch = 3
switch(ch){
    case 1:
        console.log('I m 1')
        break
    case 2:
        console.log('I m 2')
        break
    case 3:
        console.log('I m 3')
        break
}

/**
 * Loop for,while,do_while
 */
for (let i = 1; i < 11; i++) {
    console.log(`2 x ${i} = ${2*i}`)
}

let j = 1
while(j<=10){
    console.log(`3 x ${j} = ${3*j}`)
    j++
}

let k=1
do{
    console.log(`4 x ${k} = ${4*k}`)
    k++
}while(k<=10)

/**
 * Function
 */

function Hello(){
    console.log('Hello');
}
Hello()

function add(a,b){
    console.log(a+b);
}

add(4,10)

/**
 * Array
 */

let nameArray = ['John','jane','Sandy']
console.log(nameArray)

let numArray = [10,20,54,45,75,85,89]

for (let i = 0; i < numArray.length; i++) {
    console.log(numArray[i])
}