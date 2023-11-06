// Immediately Invoked Function Expression (IIFE)


// function chai(){
//     console.log(`DB Connected`);
// }

// chai();

// IIFE Syntax cover function with () and then ()
(function chai(){ // this is called name iife
    console.log(`DB Connected`);
})();

// can be also used in arrow functions

( (name) => { // this is unnamed iife
    console.log(`this is ${name}`);
}
    
)("Atharva");