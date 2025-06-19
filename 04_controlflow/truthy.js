//truthy / falsey
// const userEmail="";              //false
// const userEmail="h@gmail.com";    //true
// const userEmail=[];                //true

// if(userEmail){
//     console.log("Got a user email");
// }else{
//     console.log("Dont have a user email");
// }

// falsy value
//false, 0, -0 , BigInt(0n) , "", null, undefined, NaN

//Truthy value
// "0", "abc","false", " ",[],{},function(){},


//array length check
// if(userEmail.length===0){
//     console.log("array is empty");
// }

//object check
// const emptyobject= {};
// if(Object.keys(emptyobject).length===0){
//   console.log("empty object");
// }


//Nullish coalescing Operator(??): null, undefined
let val1;
// val1 = 5??10;
// val1 = null??10;
// val1 = undefined??15;
// val1 = undefined??10??15;

// console.log(val1);

//ternary operator(?:)
// condition?true:false

const iceTeaPrice=100;
iceTeaPrice>=80?console.log("greater than 80"):console.log("less than 80");
