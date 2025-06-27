// let nums=[5,3,2];
// let modNums= [4,...nums,2];

// nums.push(6);
// console.log(modNums);

let player ={
    name: "Cubarsi",
    age:"17",
    city:"Barcelona",
}
let asset ={
    ...player,
    position:"Centre Back",
    skills:"Passing",

}
console.log(asset);


// The spread operator, often denoted by three dots (...), is a feature 
// introduced in JavaScript ES6 (ECMAScript 2015). It's a concise 
// and convenient syntax for expanding elements of iterable objects,
//  such as arrays, strings, or objects, into places where multiple 
//  elements or variables are expected.