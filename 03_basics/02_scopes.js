
// var c=30;
// let a =300;
// const b=40;

if(true){
    // let a=10;
// const b=20;
// console.log("inner let: ",a);
// console.log("inner const :",b)
// console.log("global var :",c)
}

// console.log(a);
// console.log(b);
// console.log(c);




function one(){
    const username="Hitesh";

    function two(){
        const website="youtube";
        // console.log(username);   //closure property :-child can access parents variable but not vice versa
    }

    // console.log(website);

    two();
}

// one();



if(true){
    const username="Hitesh";
    if(username==="Hitesh"){
        const website=" youtube";
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);


// +++++++++++++ interesting example +++++++++++

console.log(addone(5));      //hoisting

function addone(num){
    return num+1;
}


//same but:- below one call as expression and avoide hoisting

addTwo(5);
const addTwo= function(num){
    return num+2;
}