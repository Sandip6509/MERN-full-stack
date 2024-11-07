let input = document.getElementById('input')
let btn = document.getElementById('btn')
let warning = document.getElementById('warning')
let guesses = document.getElementById('guesses')

let answer = Math.floor(Math.random()*100)+1

let numGuesses = 0

btn.addEventListener('click',() => {
    guessesNumber()
})

function guessesNumber(){
    if(input.value < 1 || input.value > 100 || isNaN(input.value)){
        warning.innerHTML = 'Enter between 1 to 100'
    }else{
        numGuesses ++
        guesses.innerHTML = 'No. of Guess : '+numGuesses
        if(input.value > answer){
            warning.innerHTML= 'You guessed to High !'
            input.value = ''
        }else if(input.value < answer){
            warning.innerHTML = 'You Guessed too Low !'
            input.value = ''
        }else {
            warning.innerHTML = 'Congratulation you guessed to correct answer'
            setTimeout(() => {
                resetGame()
            },5000)
        }
    }
}

function resetGame(){
    numGuesses = 0
    answer = Math.floor(Math.random()*100)+1
    input.value = ''
    btn.disabled = false
    guesses.innerHTML = 'No. of Guess: 0'
}