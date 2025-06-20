//for in loop

//loop over objects
const myObject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
}


//array
const programming=["js","cpp","ru","swift"];

for (const key in programming) {
    // console.log(key);   
    // console.log(programming[key]);   
}


// map
// const map =new Map();
// map.set('IN',"India");
// map.set('USA',"United State of America");
// map.set('Fr',"France");
// map.set('IN',"India");

// for (const key in map) {  //map are not iterable
//     console.log(key);   
// }