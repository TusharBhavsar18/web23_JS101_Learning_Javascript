// Problem 2 : Given an array of string count the overall total number of characters

var cars = ["hey", "where", "are", "you", "going"];
let sum = 0;

for(let i=0 ; i<cars.length ; i++){
  sum += cars[i].length;
}
console.log("total number of characters is",sum);