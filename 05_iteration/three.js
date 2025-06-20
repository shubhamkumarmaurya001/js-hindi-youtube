//for of loop (higher order array loop)

// ["","",""]
// [{},{},{}]

//array
const arr=[1,2,3,4,5,6];
for (const i of arr) {
    // console.log(i);
}

//string
const greeting ="Hello World";
for(const i of greeting){
    // console.log(i);
}


//map
const map =new Map();
map.set('IN',"India");
map.set('USA',"United State of America");
map.set('Fr',"France");
map.set('IN',"India");

console.log(map);

for (const [key,value] of map) {
    console.log(key +":-"+value);
}

//object
const myObject={
    'game1':"NFS",
    'game2':"spiderman"
}

// for (const [key,value] of myObject) {    //object are not iterable
//     console.log(key +":-"+value);      
// }