const button = document.querySelectorAll('.button')
// console.log(button);
const body = document.querySelector("body")
// console.log(body);


button.forEach(function (button){
// console.log(button);
button.addEventListener('click', function(event){
    console.log(event);
    console.log(event.target);

    
        body.style.backgroundColor = event.target.id
    
    // if(event.target.id== "grey"){
    //     body.style.backgroundColor= "grey"

    // }
    // if(event.target.id== "white"){
    //     body.style.backgroundColor= "white"

    // }
    // if(event.target.id== "yellow"){
    //     body.style.backgroundColor= "yellow"

    // }
    // if(event.target.id== "black"){
    //     body.style.backgroundColor= "black"

    // }
    

})

});

