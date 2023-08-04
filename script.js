

let player1Dice =  document.querySelector(".img1")
let player2Dice = document.querySelector(".img2")

let button1 = document.querySelector(".roll-dice-1")
let button2 = document.querySelector(".roll-dice-2")

const diceImages = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]

button1.addEventListener("click", () => {
    let randomDiceNumber1 = Math.floor(Math.random()*6) 
    
    player1Dice.setAttribute("src", diceImages[randomDiceNumber1])

})

button2.addEventListener("click", () => {
    let randomDiceNumber2 = Math.floor(Math.random()*6) 
    
    player2Dice.setAttribute("src", diceImages[randomDiceNumber2])
})
