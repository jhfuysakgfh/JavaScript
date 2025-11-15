const form =   document.querySelector("form")
// console.log(form);
 
form.addEventListener('submit', function (event) {
    // console.log("submit");
    
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    console.log(height);
    console.log(weight);
    console.log(results);
    
    

    if (height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `give a valid height-> ${height}`;
        // console.log(height);
    }
    // results.innerHTML = `${height}`;


    else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `give a valid weight-> ${weight}`;
        // console.log(height);
    }
    // results.innerHTML = `${weight}`;
    else{
       const bmi = (weight / ((height * height) / 10000)).toFixed(2);
       results.innerHTML = `<span>${bmi}</span>`;
    }



});

