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
        let error = false
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
    
})