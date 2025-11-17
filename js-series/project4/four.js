// const { createElement } = require("react");

const randomNumber = (Math.round(Math.random() *100 +1));

// console.log((Math.round(Math.random() *100 +1)));

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')
let prevguess = []
let numGuess = 1

let playGame = true
// console.log(prevguess);


if(playGame){
    submit.addEventListener('click', function(event){
        event.preventDefault();
        const guess = parseInt(userInput.value)
        // console.log(guess);
        
        validateGame(guess)



    })
}

function validateGame(guess){
    if(isNaN(guess)){
        alert('please enter a valid number')

    }else if(guess < 1) {
        alert('please enter number more than 1')
    }
    else if(guess > 100) {
        alert('please enter number less than 100')
    }else{
        prevguess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMsg(`Game Over . ranmdom number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGame(guess)
        }


    }

}


function checkGame(guess){
    if(guess === randomNumber){
        displayMsg(`you are entered right number`)
    endGame()
    }else if (guess < randomNumber){
        displayMsg(`number is too low`)

    }else if (guess > randomNumber){
        displayMsg(`number is too high`)
    }
    // console.log(prevguess);


}


function displayGuess(guess){
    userInput.value= '';
    guessSlot.innerHTML+= `${guess}, `
    numGuess++;
    remaining.innerHTML= `${ 11 - numGuess}`;

}

function displayMsg(message){
    lowOrHi.innerHTML= `<h3>${message}</h3>`

}

function endGame(){
    userInput.value= '';
     userInput.setAttribute('disabled', '');
     p.classList.add('button');
     p.innerHTML=`<button id="newGame">Start New Game</button>`;
     startOver.appendChild(p);
     playGame= false;
     newGame();
    
}
function newGame(){
    const newGame = document.querySelector('#neGame')
    newGameButton.addEventListener('click', function(event){
        randomNumber = (Math.round(Math.random() *100 +1));
        prevguess = []
        numGuess = 1
        guessSlot.innerHTML = ''
         remaining.innerHTML= `${ 11 - numGuess}`;
         userInput.removeAttribute('disabled')
         startOver.removeChild(p)

         playGame = true

    })

}




