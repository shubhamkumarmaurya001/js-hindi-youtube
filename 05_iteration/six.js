//for each loop continue...

// const coding=["js", "ruby", "java","python","cpp"];

// const values = coding.forEach((item)=>{
//     // console.log(item);
//     return item;
// })
// console.log(values);


const mynum=[1,2,3,4,5,6,7,8,9,10];
// const newnum = mynum.filter((num)=> num>4);
const newnum = mynum.filter((num)=> {
    return num>4});
console.log(newnum);
