const user = {
    username: "Atharva",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}


// user.welcomeMessage();
// user.username='sam';
// user.welcomeMessage();


//! Arrow Functions

// ! Syntax :    () => {}

// const chai = function(){
//     console.log("Logged into chai");
// }


// const chai = () => {
//     console.log("Logged in");
// }

// chai();


// const addTwoNumbers = (num1,num2) =>{
//     console.log(`Sum is ${num1+num2}`);
// }

// implict return 
const addTwoNumbers = (num1,num2) => num1+num2;

addTwoNumbers(2,3);