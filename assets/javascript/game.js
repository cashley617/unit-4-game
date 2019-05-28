

let wins = 0;
let losses = 0;
let greenCrystal = 0;
let purpleCrystal = 0;
let redCrystal = 0;
let whiteCrystal = 0;
let yourScore = 0;

function initGame() {
    assignRandomNumber();
    resetCrystals();
    updateDOM();
}

initGame(); 

function assignRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 120 + 19);
}

