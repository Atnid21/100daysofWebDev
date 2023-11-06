// Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).



const problem1 = (text) => {

   let size = text.length-1;  // 3 

   for(let i=0;i<size/2;++i){ // 3
    let x = text[i]; // 0,1,2
    let y = text[size-i]; // 3,2 

    if(x!=y){
        console.log("not palindrome");
        return;
   }
}

console.log("Its a palindrome number")
}


let text = "acca"
problem1(text);








// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
// Write a JavaScript program to calculate the factorial of a given number.
// Write a JavaScript function to check if a given number is prime.
