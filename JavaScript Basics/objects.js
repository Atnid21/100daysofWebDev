//! Singleton

/*  // !Object literals syntax below

const mySy = Symbol("key1");

const JsUser = {
    name : "Atharva",
    age:18,
    location:"Chh Sambhajinagar",
    [mySy] : "mykey"   
}

//  How to access it 

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser[mySy]);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greeting();  */

// 


// ! Creation of object using constructor

// const tinderUser = new Object()

// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"a",4:"b"}

// ! Combine the objects
// const obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);

// ! using spread operator
// const obj3 = {...obj1 , ...obj2};
// console.log(obj3);



//! How to access a data when it comes from database 

// const users = [
//     {
//         id : 1,
//         email: "h@gmail.com"
//     },
//     {
//         id : 1,
//         email: "h@gmail.com"
//     },
//     {
//         id : 1,
//         email: "h@gmail.com"
//     },
// ]

// console.log(users[1].email);

// console.log(Object.keys(users[1]));
// console.log(Object.values(users[1]));
// console.log(users.hasOwnProperty('id'));



// ! Destructuring 


const course = {
    courseName : "js in hindi",
    price:"999",
    courseInstructor:"Atharva"
}

// course.courseInstructor

const {courseInstructor: instructor}= course  // destructing of object

console.log(instructor);







