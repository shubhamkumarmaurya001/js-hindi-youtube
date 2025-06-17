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
console.log(loginusermessage());