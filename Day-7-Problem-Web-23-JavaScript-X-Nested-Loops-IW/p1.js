// Problem 1: Print the Calendar date in the below format
// 1-1
// 2-1
// 3-1
// .
// .
// .
// .
// .
// 31-1
// .
// .
// .
// .
// .
// 31-12

let m = 12
let d = 31
for(let i=1 ; i<=m ; i++){
  if(i==2){
    d=28;
  }else if(4==i||6==i||9==i||11==i){
    d=30
  }else{
    d=31
  }
  let bag = "";
    for(let j=1 ; j<=d ; j++){
      console.log(j+"-"+i) 
    }
  
}