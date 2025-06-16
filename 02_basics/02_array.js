const marvelheros =["thor","Ironman","Spiderman"];
const dcheros=["superman","flash","batman"];

// marvelheros.push(dcheros);

// console.log(marvelheros);
// console.log(marvelheros[3][1]);

// const allheros=marvelheros.concat(dcheros);
// console.log(allheros);

const allnewheros = [...marvelheros, ...dcheros];
// console.log(allnewheros);

const anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]];

const realanotherarray= anotherarray.flat(Infinity);
//console.log(realanotherarray);


console.log(Array.isArray("Shubham"));
console.log(Array.from("Shubham"));  
console.log(Array.from({name:"Shubham"}));   //interesting


let score1 =100;
let score2 = 200;
let score3= 300;

console.log(Array.of(score1,score2,score3));