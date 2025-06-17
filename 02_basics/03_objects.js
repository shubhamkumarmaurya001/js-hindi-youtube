//singleton
// Object.create
const tinderUser= new Object();


//object literals

const mysym =Symbol("key1");

const Jsuser ={
    name:"shubham",
    "fullname":"Shubham maurya",
    [mysym]:"mykey1",
    age:18,
    location:"varanasi",
    email:"skm@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(Jsuser.email);
console.log(Jsuser.fullname);
console.log(Jsuser["fullname"]);
console.log(Jsuser["email"]);
console.log(Jsuser[mysym]);

Jsuser.email="shubham@chatgpt.com";
console.log(Jsuser.email);

// Object.freeze(Jsuser);

Jsuser.greeting = function(){
    console.log("hello");
}
Jsuser.greetingTwo = function(){
    console.log(`hello , ${this.name}`);
}

console.log(Jsuser);
console.log(Jsuser.greeting);
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());
