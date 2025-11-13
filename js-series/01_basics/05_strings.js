const name = "Tripathi"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Tripathi-hc-com')

console.log(gameName[9]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Tripathi    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://tripathi.com/tripathi%20ji"

console.log(url.replace('%20', '-'))

console.log(url.includes('com'))        //============      check this is present in or not     ===//

console.log(gameName.split('-'));