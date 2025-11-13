// const isLoggedIn = "true"
const temprature = 50
 if(temprature > 50){
    console.log("tem is more than 50");  
 }
else if(temprature == 50){
        // console.log("tem is 50")
    }
    // else{
    //     console.log("go ahead");
        
    // }
else{

     console.log(`tem is less than 50`)
 }

 ///    <   , > ,>= ,<= ,== , === , != , !==        ////////////

 const score = 300
if (score > 200){
    const power = "fly"
    console.log(`User can ,${power}`);
    
}
// console.log(`User can ,${power}`);

// if(balance = 1000) console.log("test"),console.log("kjjk");  ////////////Not a right way /////////////////
const balance = 970
if(balance < 100){
    console.log("less than 100");

    
}
else if(balance < 500){
    console.log("less than 500");
    
}
else if(balance < 700){
    console.log("less than 700");
    
}
else if(balance < 900){
    console.log("less than 900");
    
}
else{
    // console.log("more than 1000");
    
}


//////???????????????       more than one condition with same output        ?????????????????///////////

const isLoggedIn = true
const dabitcard = true
const isLoggedInfromGoogle = true
const isLoggedInFromEmail = true
const isFromVibes = true


if (isLoggedIn && dabitcard && 2!==3){
    // console.log("you can purchage");
    
}

if (isLoggedInfromGoogle || isLoggedInFromEmail || isFromVibes){
    console.log("you can log in");
    
}


//==========================    NULLISH COALESCING OPERATOR (??): NULL , UNDEFINED     =============================//

let val1;
// val1 = 4 ?? 38
// val1 = null ?? 78
// val1 =  undefined ?? 76
val1 = null ?? undefined ?? 98


console.log(val1);



///=====================    terniary Operator   =====================//
const price = 100;
price <=80 ? console.log("less than 80"): console.log("more than 80");


