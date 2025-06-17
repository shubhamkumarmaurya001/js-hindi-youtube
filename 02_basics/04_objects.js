const tinderUser= new Object();
 tinderUser.id="123abc";
 tinderUser.name="sammy";
 tinderUser.isLoggedIn=false;

// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"shubham",
            lastname:"maurya",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
const obj4={5:"c",6:"d"};
// const obj3={obj1,obj2};
// const obj3=Object.assign({},obj1,obj2,obj4);

const obj3={...obj1,...obj2};

// console.log(obj3);


const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    }
]

// console.log(users[1].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//object destructuring

const course={
    coursename:"js in hindi",
    price:999,
    courseinstructor:"hitesh"
}

const {coursename:cn,courseinstructor:ci}=course;
// console.log(coursename);
console.log(cn);
console.log(ci);