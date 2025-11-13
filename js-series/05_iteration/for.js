/// for loop 

for (let i = 0; i <= 10; i++) {
    var element = i;
    if (i == 5){
        // console.log("5 is best number");
        
    }
    // console.log(element);
    
    
}
// console.log(element);


for (let i = 0; i <= 10; i++) {
    // console.log(`Table of  :${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop :  ${j}`);
        // console.log(i + '*' + j + "=" + i * j);
        
        
        

         
    }
    
    
}

let MyArray = ["sonal" , "akash" , "manish" , "debargha"]
// console.log(MyArray.length);

for (let i = 0; i < MyArray.length; i++) {
    const element = MyArray[i];
    // console.log(element);
    
    
}

// for (let i = 0; i <= 10; i++) {
//     // var element = i;
//     console.log(i);
    
//     if (i == 5){
//         console.log("5 is best number");
//         break
        
//     }
//     // console.log(element);
    
    
// }
for (let i = 0; i <= 10; i++) {
    // var element = i;
    // console.log(i);
    
    if (i == 5){
        // console.log("5 is best number");
        continue
        
    }
    // console.log(i);
    
    
}




////////////==============================print even and odd in two array======================/////////////
let evenArray =[]
let oddArray = []

for (let i = 0; i <= 50; i++) {
    // console.log(i);
    if (i%2 == 0){
        // console.log(`even number ${i}`);
        // const even = (i) => i%2;
        
        // if(true){

        evenArray.push(i)
            // console.log(`even number =${evenArray.push(i)}`);
            // console.log(typeof i);
            
            
        // }
    

    }else{
        oddArray.push(i)
        // console.log(`odd number =${i}`);
        
    }
    
}
console.log(`odd numbers are =[${oddArray}]\n even numbers are =[${evenArray}]`);
// console.log(typeof oddArray);
//////////////////////////      type of Array = object  ////////////////////////////////////////////////////////


    
