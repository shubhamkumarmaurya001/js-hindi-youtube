function saymyname(){
    console.log("s");
    console.log("h");
    console.log("u");
    console.log("b");
    console.log("h");
    console.log("a");
    console.log("m");
}

// saymyname();

// function addtwonum(num1,num2){    //parameter
//     console.log(num1+num2);
// }
function addtwonum(num1,num2){    //parameter
    // console.log(num1+num2);
    return num1+num2;
}

const result=addtwonum(1,2);     //arguments
// console.log(result);

function loginusermessage(username="sam"){    //default value
    // if(username === undefined)
    if(!username){
        console.log("please enter username");
        return
    }
    else
    return `${username} just logged in`;
}

// console.log(loginusermessage("shubham"));
// console.log(loginusermessage());


// function calculateCartPrice(...num1){      //Rest operator
//       return num1;
// }
function calculateCartPrice(val1,val2,...num1){      //Rest operator
      return num1;
}

console.log(calculateCartPrice(200,300,400,2000));


//pass object in function

const user={
    username:"hitesh",
    price:199
}

function handleObject(anyobject){
      console.log(`name is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username:"shubham",
    price:99
});


//pass array in function

const myNewArray=[200,100,300,400];

function handleArray(getArray){
       return getArray[1];
}

// console.log(handleArray(myNewArray));
console.log(handleArray([100,200,300,400]));