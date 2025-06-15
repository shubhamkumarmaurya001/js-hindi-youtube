//**************** Datatype Conversion ***********
//1.number

//let score = "33"
//let score = "33abc"
//let score = null;
//let score = true;
let score = "hitesh";


//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number (score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

//"33"=>33
//"33abc"=>NaN
//null=>0
//true=>1
//"Hitesh"=>NaN


//2.boolean

//let isLoggedIn=1;          //true
//let isLoggedIn="";        //false
//let isLoggedIn="hitesh";    //true
//let isLoggedIn=null;          //false & object
//let isLoggedIn=undefined;       //false & Undefined
let isLoggedIn;                    //false & undefined



let booleanIsLoggedIn= Boolean(isLoggedIn);
//console.log(typeof (isLoggedIn));
//console.log(typeof (booleanIsLoggedIn));
//console.log(booleanIsLoggedIn);


//3.string

let someNumber = 33;
let stringNumber=String(someNumber);

//console.log(typeof (stringNumber));
//console.log(stringNumber);



//************** Operations ********************

let value = 3;
let negValue = -value;
//console.log(negValue);
//console.log(typeof negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%3);

let str1 ="hello ";
let str2= "Hitesh";
let str3 = str1 +str2;
//console.log(str3);

// console.log("1" +2);        //12
// console.log(1 +"2");        //12
// console.log("1"+2 +2);      //122
// console.log("1"+(2 +2));   //14
// console.log(1+2+"2");    //32
//  console.log((1+3)*4/2);      //8

// console.log(true)     //true
// console.log(+true)    //1
// console.log(true+)   //error
// console.log(+"");      //0


let num1 , num2 , num3
num1 = num2 = num3 = 2+2;   //not preffered

let gameCounter =100;
gameCounter++;
++gameCounter;
console.log(gameCounter);