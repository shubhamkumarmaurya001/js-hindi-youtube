const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is completed");
        resolve();
    },1000)
});

promiseOne.then(function(){
    console.log("promise consumed");
})



new Promise(function (resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async Task resolved");
})


const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@chai.com"});
    },1000)
})
promiseThree.then(function(user){
       console.log(user);
       console.log(user.username);
})


const promiseFour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true;
        // let error =false;
        if(!error){
            resolve({username:"Hitesh",password:"123"})
        }else{
            reject("error somethimg went wrong")
        }
    },1000)
})

promiseFour.then(function(user){
  console.log(user);
  return user.username;
}).then((myuser)=>{
  console.log(myuser);
}).catch(function(err){
    console.log(err);
}).finally(()=>{
    console.log("Promise is resolved or rejected finally")
})



const promiseFive= new Promise(function(resolve,reject){
   setTimeout(function(){
        let error =true;
        // let error =false;
        if(!error){
            resolve({username:"Javascript",password:"123"})
        }else{
            reject("error JS went wrong")
        }
    },1000)
});


async function consumepromisefive(){
    try{
        const response= await promiseFive;
        console.log(response);
    }catch(error){
        console.log(error);
    }
}

consumepromisefive();



//https://jsonplaceholder.typicode.com/users

// async function getalluser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data= await response.json();
//     console.log(data);
//     } catch (error) {
//         console.log("E: ",error);     
//     }
// }
// getalluser();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
     return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))