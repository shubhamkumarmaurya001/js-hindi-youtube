const name="shubham";
const repoCount=50;
console.log(name + repoCount + "value");

//`` is string interpolation
console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName=new String('shubham-sm-com');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));

const newString=gameName.substring(0,4);
console.log(newString);

const anotherString=gameName.slice(-8,4);
console.log(anotherString);

const newStringOne= "    shubham";
console.log(newStringOne);
console.log(newStringOne.trim());

const url= "https://shhuham.com/shubham%20maurya"
console.log(url.replace('%20','-'));

console.log(url.includes('shubham'));

console.log(gameName.split('-'))