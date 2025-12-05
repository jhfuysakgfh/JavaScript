const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){

        console.log("promise one");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("new promise");   
})





const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){

        console.log("promise one");
        resolve()
    },1000)
}).then(function(){     //      ========================2nd Method============================      //
    console.log("new promise");
    
})



//  ==============  pass value in resolve       =====================//
const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        
        console.log("Promise Three");
        // resolve({name:"tripathi", email:"tripathi@gmail.com"})
    },1000)
    

}).then(function(user){
    console.log(user);
    
})

//===================   promise four        ===========================//
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){

            console.log("Promise Four");
            resolve({name:"tripathi", email:"tripathi@gmail.com"})
        }else{
            reject('error: something went wrong');
        }

    },1000)

}).then((user)=>{
    console.log(user);
    return user.name;
}).then((name)=>{
    console.log(name);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=>{
    console.log("resolved or reject");
    
})

//===================   promise five        ===========================//


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){

            console.log("Promise Four");
            resolve({name:"javascript", email:"tripathi@gmail.com"})
        }else{
            reject('error: JS went wrong');
        }

    },1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
        
        
    } catch (error) {
        console.log(error);
        
        
    }
}
consumePromiseFive();

async function getalluser() {
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(response);
    
    // const data = response.json      //  change from string to json =============================
    // console.log(data);
    }catch(error){
        console.log("E:",error);
        

    }
    
    
}
getalluser()