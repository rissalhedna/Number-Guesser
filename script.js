//Game values
let min=1,
    max=10,
    winningnum= getRandomNum(min,max),
    guessesleft=3;

//UI elements 
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');
//assign minimum and maximum
minNum.textContent = min
maxNum.textContent = max

//Play again
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload()
    }
})

function getRandomNum(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

//Listen for guess
guessBtn.addEventListener('click', function(e){
    let guess = parseInt(guessInput.value)

    if( isNaN(guess) || guess <min || guess>max){
        setMessage(`Please enter a valid number between ${min} and ${max}!`,'red')
    }else{
        if (guess === winningnum){
            //disable input
            guessInput.disabled = true
            guessInput.style.borderColor = 'green'
            setMessage('Correct!','green')
            gameOver()
        }else{
            guessesleft -= 1
            if(guessesleft == 0){
                //Game over
                guessInput.disabled = true
                guessInput.style.borderColor = 'red'
                setMessage(`You lost! The correct number was ${winningnum}`,'red')
                gameOver()
            }else{
                guessInput.style.borderColor = 'red'
                setMessage(`Guess is not correct! you have ${guessesleft} guesses left`, 'red')
                guessInput.value = ''
            }
        }
    }
    
})

function gameOver(){
    guessBtn.value = 'Play Again'
    guessBtn.className += 'play-again'
}

//display error message
function setMessage(msg,color){

    message.style.color = color
    message.textContent = msg
}