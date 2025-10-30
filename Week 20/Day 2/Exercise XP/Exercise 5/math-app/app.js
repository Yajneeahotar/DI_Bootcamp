const lodash = require('lodash');
const { addition, multiplication } = require('./math.js');

let sum = addition(2,3);
console.log(sum)
let multiply = multiplication(3,5);
console.log(multiply)

const scores = [85, 90, 78, 92];
const total = lodash.sum(scores); 
console.log(total);