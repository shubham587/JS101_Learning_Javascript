//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
var userName = "abc@gmail.com";
var password = "123@abc";
if(userName == "abc@gmail.com"){
  if(password == "123@abc"){
    console.log("Login sucessfully");
  }else{
    console.log("wrong password");
  }
}else{
  console.log("Wrong credentials");
}