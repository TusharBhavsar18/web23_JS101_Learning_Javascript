// Problem 2: Print Prime Numbers from 1 to given limit


for(let i=1 ; i<=100 ; i++){
  let factor = 0;
    for(let j=1 ; j<=100 ; j++){
      if(i%j==0){
        factor++
      }
    }if(factor==2){
      console.log(i, "is prime number")
    }else{
      console.log(i, "is not prime number")
    }
}