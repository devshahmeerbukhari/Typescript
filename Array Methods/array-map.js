"use strict";
/*
Simple Defination:
Why do we use the map method in the array?
When we have to traverse every single element of an array
and change that element with some operations, we use the map method
*/
/*
In depth Defination:
Why we Use the map Method

1. Transformation:
    The primary purpose of map is to transform each element of an array and produce a new array with the transformed elements.
    For example, if you have an array of numbers and you want to create a new array with each number doubled, map is an ideal choice.

2. Immutability:
    map does not modify the original array. Instead, it returns a new array, preserving the immutability of the original data. This is beneficial in functional programming and helps avoid side effects.

3. Readability and Conciseness:
    Using map makes the code more readable and concise. It clearly communicates that the intention is to transform each element of the array.

4. Chaining:
    map can be chained with other array methods like filter, reduce, and sort, allowing for more powerful and expressive code.
*/
/*Lets do few task for clear understanding*/
/*Example 1: Write a code in which you have given an array and your task is to task square of each element of
that array and return the value to same index*/
let array1 = [1, 2, 3, 4, 5, 6];
function squareOfEachElement(array) {
    return array.map((element) => element * element);
    /*
    Here I have used a callback function with the map method.
    =>: This is the arrow function syntax, which separates the parameter(s) from the function body.
    element: Represents each value in the array during iteration.
    The map function's parameter is a callback function. This function is called for each element in the array.
    */
}
console.log(`Original Array1 is: ${array1}`); //Output [1, 2, 3, 4, 5, 6]
const squareArray = squareOfEachElement(array1);
console.log(`Updated Array1 (square of each array) is: ${squareArray}`); //Output [1, 4, 9, 16, 25, 36]
/*Example 2: Convert an array of strings to numbers.*/
let array2 = ["1", "2", "3", "4", "5"];
console.log(`Original Array2 is: ${array2}`);
console.log(`Type of Original Array2: ${typeof (array2[0])}`);
function stringToNumber(array) {
    return array.map((element) => {
        return parseInt(element);
        /*
        parseInt is a built-in JavaScript function (also available in TypeScript)
        which converts a string element to a number.
        */
    });
    /*
    When using parentheses after the arrow (=>) in an arrow function,
    you need to explicitly return the value from the function body.
    Hence, we explicitly return parseInt(element) to convert each string to a number.
    */
}
let strToNumArr = stringToNumber(array2);
console.log(`Updated Array2: ${strToNumArr}`);
console.log(`Type of Updated Array2 (convert string array to number) is: ${typeof (strToNumArr[0])}`);
/*Example 3: Extract a specific property from an array of objects.*/
let array3 = [
    { name: "Shahmeer", age: "21", gender: "male" }, { name: "Rahim", age: "20", genger: "male" }, { name: "Sara", age: "19", gender: "female" },
    { name: "Ahamd", age: "22", gender: "male" }
];
function extractName(array) {
    return array.map((element) => element.name);
}
const extractNameArr = extractName(array3);
console.log("Original Object Array3: ");
console.log(array3);
console.log(`Extracting Names From Object Array3: [ ${extractNameArr} ]`);
/*Example 4: Apply complex transformations to each element.*/
const products = [
    { name: "Shirt", price: 20, size: 'Large' },
    { name: "Pants", price: 40, size: 'medium' }
];
const discountedProducts = products.map(product => (Object.assign(Object.assign({}, product), { price: product.price * 0.9 // Overrides the price property with the discounted price
 })));
console.log(discountedProducts);
// Output: [{ name: "Shirt", price: 18 }, { name: "Pants", price: 36 }]
