// Given an array find the unique items in the array

let arr = ["F","O","C","U","S","Y","A","R","R"];
let obj = {};

  for(let i=0 ; i<arr.length ; i++){
    if(obj[arr[i]]==undefined){
      obj[arr[i]] = 1;
    }
  }
      console.log(obj);