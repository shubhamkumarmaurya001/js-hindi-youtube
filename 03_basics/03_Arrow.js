const user={
    username:"Hitesh",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.username="sam";
// user.welcomeMessage();

// console.log(this);


// this not work inside function as context

// function chai(){
//     let username="Hitesh"
//     console.log(this.username);   //here, username is context  
//     console.log(this);
// }

// chai();


//Arrow fumction
// const chai= function(){
//     const username="hitesh";
//     console.log(this.username);
//     console.log(this);
// }
const chai= ()=>{
    const username="hitesh";
    console.log(this.username);
    console.log(this);
}
// chai();


// const addTwo = (num1,num2)=>{
//        return num1+num2;
// }
// const addTwo = (num1,num2)=> num1+num2;  //implicit return arrow function
// const addTwo = (num1,num2)=> ( num1+num2 );  //implicit return arrow function inside parenthesis no need to write return keyword
const addTwo = (num1,num2)=> ( {username:"Hitesh"} ); 
console.log(addTwo(3,4));
