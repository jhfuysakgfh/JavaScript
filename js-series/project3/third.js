document.getElementById('clock')
// document.querySelector('#clock')         we can use any one

setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString()
    
}, 1000)