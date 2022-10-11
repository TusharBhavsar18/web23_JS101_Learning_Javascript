// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

const saved_username = "tusharbhavsar";
const saved_password = "tushar@123";

  let input_username = "tusharbhavsar";
  let input_password = "tushar@123";

      if(saved_username===input_username){
        if(saved_password===input_password){
          console.log("login successful");
        }else{
          console.log("wrong password");
        }
      }else{
        console.log("wrong credentials");
      }