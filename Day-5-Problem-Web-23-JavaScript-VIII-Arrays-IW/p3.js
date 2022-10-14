// Problem 3 : Given an array of numbers find the average of all the even numbers.

let arr = [5,15,25,35,45];
let sum = 0;

  for(let i=0 ; i<arr.length ; i++){
    sum += arr[i];
  }
    console.log(sum/arr.length)