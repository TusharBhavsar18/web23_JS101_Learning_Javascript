// Problem 1 : Given a string count the number of words in that string

let str = "H e l l o  w o r l d"
let count = 1;

for(let i=0 ; i<str.length ; i++){
  if(str[i]==" "){
    count++
  }
}
str=="" || str==" " ? console.log("count is", count = 0)
  : console.log("count is", count);