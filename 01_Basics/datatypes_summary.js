// #Primitive data type  (call by value and how it store in memory)
//7 type :String, Number, boolean, Null, Undefined, Symbol, BigInt

//js is dynamically typed language 
const score =3;                //number
const scorevalue=3.0;          //typescript

const isLoggedIn=false;        //boolean
const outsideTemp=null;        //null

let userEmail;                  //undefined
let email=undefined;            //undefined

const id=Symbol('123');           //symbol
const anotherId= Symbol('123');
console.log(id=== anotherId);

const bigNumber= 22222234758393575356383n;  //BigInt

// #Reference data Type or Non-Primitive (call by reference)
//Array , Objects ,Functions

const heros =["shaktiman","naagraj","doga"];  //Array
let myobj={name:"shubham",                     //object
  age:22
};

const myfunction= function(){                 //function
    console.log("hello world");
}


console.log(typeof bigNumber);
console.log(typeof id);
console.log(typeof outsideTemp);
console.log(typeof myfunction);



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack(primitive)          //Heap(non-primitive)

let myyoutubename= "shubhammaurya";

let anothername= myyoutubename;
anothername="codechai"
console.log(myyoutubename);
console.log(anothername);

const userOne={
  email:"skm@google.com",
  upiid:"user@ybl"
}

let userTwo=userOne;
userTwo.email="user@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
