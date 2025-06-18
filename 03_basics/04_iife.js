// Immediatley Invoked Function Expression (IIFE) 
//To avoid global scope variable polluted function scope

// function chai(){
//     console.log("DB connected");
// }
// chai();

(function chai(){   //named iife
    console.log("DB connected");
})();

//(function xyz(){})()
// (() => {
//     console.log("DB Connected too"); 
// })();

((name) => {
    console.log(`DB Connected too ${name}`); 
})("Hitesh");