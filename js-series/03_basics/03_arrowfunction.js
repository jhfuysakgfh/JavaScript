const user= {
    // username : "ashu",
    price : 999,

    welcomemsg : function(){
        // console.log(`${this.username},welcome in js series`);
         
        

    }
   

}
 user.welcomemsg()
 user.username="ram"
 user.welcomemsg()

//  console.log(this)

// function chai(){
//     let username="ram"
//     console.log(this)
// }
// chai()
// console.log(this);


// const chai= ()=> {
//         let username="ram"
//         console.log(this) ///////////////   empty paranthesis        ///////////
    
// }
// chai()

/////////////===========    1st Method   of Arrow Function   ===================//////////////

// const add =  (num1 , num2) => {
//     return num1+num2    =================return is nacessary in {} ============
// }
// add()
// console.log(add(3,8));


/////////////===========    2nd Method   of Arrow Function   ===================//////////////

// const add=(num1,num2)=> (num1+num2)
// console.log(add(4,7))

const add=(num1,num2)=> ({username:"tripathi"})
console.log(add(4,7))

// const Myarray = [1,2,3,4,4,5]
// Myarray.forEach(() => ())