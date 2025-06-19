//if

// const isuserloggedin=true;
// const temperature =51;

// if(temperature<50){
//     console.log("less than 50");
// }else{
//     console.log("temperature is greater then 50");
// }
// console.log("executed");

// comparision operator :- <,>,<=,>=,==,!=,===,!==


//scope discuss here
// const score=200;

// if(score>100){
//     const power="fly";
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);


//shorthand
const balance = 1000;
// if(balance>500) console.log("test"),console.log("test2");
// else console.log("test3");

// if-elseif-else
// if(balance<500){
//       console.log("less than 500");
// }else if(balance<750){
//     console.log("less than 750");
// }else if(balance<900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }


//&& ||
const userLoggedIn=true;
const debitCard = true;
const loggedInFromGoogle=false;
const loggedInFromEmail=true;

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy courses");
}

if(loggedInFromEmail || loggedInFromGoogle || true){
    console.log("user logged in");
}