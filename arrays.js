var fruits = ["Apple", "Banana", "Cherry", "Strowberry"];

console.log(fruits);
console.log(fruits[0]);

var moreFruits = fruits.push("Grapes");
var lastFruit = fruits.pop();

var newLength = fruits.unshift("Grapes");

var deleteFruit = fruits.shift();

var position = fruits.indexOf("Banana");
console.log(position);

console.log(fruits);
