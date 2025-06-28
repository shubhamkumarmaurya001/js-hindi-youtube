class user{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`username:${this.username}`);
    }
    static createId(){
        return `123`;
    }
}


const hitesh = new user("hitesh");
// console.log(hitesh.createId());

class Teacher extends user{
    constructor(username,email){
        super(username);
        this.email=email;
    }
}
const iphone= new Teacher("iphone","iphone@gmail.com");
console.log(iphone)
console.log(iphone.createId());
iphone.logMe();