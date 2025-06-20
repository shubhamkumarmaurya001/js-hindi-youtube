// for each loop

const coding=["js", "ruby", "java","python","cpp"];

// coding.forEach( function (item){
//     console.log(item);    
// })

// coding.forEach((item)=>{
//     console.log(item);    
// })

// function printme(item){
//     console.log(item);    
// }

// coding.forEach(printme);


// coding.forEach((item ,index,arr)=>{
//     console.log(item, index, arr);    
// })


const mycoding=[
    {
        languagename: "javascript",
        languagefilename:"js"
    },
    {
        languagename: "java",
        languagefilename:"java"
    },
    {
        languagename: "python",
        languagefilename:"py"
    },
]

mycoding.forEach((item)=>{
    console.log(item.languagename);
    console.log(item.languagefilename);    
})