//for each loop continue...

// const coding=["js", "ruby", "java","python","cpp"];

// const values = coding.forEach((item)=>{
//     // console.log(item);
//     return item;
// })
// console.log(values);

//filter
// const mynum=[1,2,3,4,5,6,7,8,9,10];
// // const newnum = mynum.filter((num)=> num>4);
// const newnum = mynum.filter((num)=> {
//     return num>4});
// console.log(newnum);

// const mynum=[1,2,3,4,5,6,7,8,9,10];
// const newnum= []
// mynum.forEach((num)=>{
//          if(num>3){
//             newnum.push(num);
//          }
// })
// console.log(newnum);





//example

const books=[
    {title:"Book One",genre:"Fiction",publish:1981,edition:2004},
    {title:"Book Two",genre:"Non-Fiction",publish:1992,edition:2010},
    {title:"Book Three",genre:"History",publish:1999,edition:2005},
    {title:"Book Four",genre:"Non-Fiction",publish:1989,edition:2007},
    {title:"Book Five",genre:"Science",publish:1991,edition:2012},
    {title:"Book Six",genre:"History",publish:1993,edition:2008},
    {title:"Book Seven",genre:"Maths",publish:1987,edition:2003},
    {title:"Book Eight",genre:"Fiction",publish:1983,edition:2001},
];

let userBooks=books.filter((bk)=>bk.genre ==='History');
 userBooks=books.filter((bk)=>{
    return bk.publish>=1990  && bk.genre==='Science';
} );
console.log(userBooks);
