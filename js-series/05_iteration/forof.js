const arr = [1,2,3,4,5]
for (const array of arr) {
    // console.log(array);
    
    
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // var akash ="akash"
    // console.log(akash);
    
    // console.log(`each word of greet= ${greet}`);
    
}

const map = new Map() 
 map.set('IN',"INDIA")
 map.set('USA',"United state America")
 map.set('FR',"France")
 map.set('jS',"JavaScript")

//  console.log(map);

for (const [key,value] of map){
    // console.log(key,':-',value);

    
}

const myObject = {
    js : 'JavaScript',
    cpp : 'c++',
    rb : 'ruby',
    switf : 'swift by apple'

}
for (const kay in myObject) {
    console.log(`${myObject[kay]} is shortcut of ${kay}`); ///////////////  use for Object  /////////////////
}
// for (const kay of Object.keys(myObject)) {
//     console.log(`${myObject[kay]} is shortcut of ${kay}`); ///////////////  use for of Object  /////////////////
// }
// console.log();

 
const programming = ["js","html","css","php","rb","py"]
for (const key in programming) {
    // if (!Object.hasOwn(object, key)) continue;
    
    // const element = object[key];
    
    console.log(programming[key]);
    
}