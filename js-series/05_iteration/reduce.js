const array = [1,2,3,5,30,25,58]
// const initialvalue= 0
const newsum = array.reduce((accuumulator,currentvalue) =>{ 
    // console.log(`acc = ${accuumulator} ,currval = ${currentvalue} `);
    
  return  accuumulator + currentvalue },0 )    ////     can use initaivalue in plcee of 0
// console.log(newsum);

// console.log(`${newsum} = acc is = ${accuumulator} and  currentvalue is = ${currentvalue}`);



const shoppingCart = [
    {
        course :'javaScript',
        price : 199
    },
    {
        course :'python',
        price : 299
    },
    {
        course :'html',
        price : 399
    },
    {
        course :'css',
        price : 499
    },
    {
        course :'php',
        price : 599
    },
    {
        course :'js',
        price : 699
    }
]
const cart = shoppingCart.reduce((acc,item) => acc + item.price,0)

console.log(cart);
