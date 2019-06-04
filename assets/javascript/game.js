

let $wins = 0;
let $losses = 0;
let $greenCrystal = 0;
let $purpleCrystal = 0;
let $redCrystal = 0;
let $whiteCrystal = 0;
let $yourScore = 0;
let $randomNumber; 
let crystals = {
    "green":0,
    "purple":0,
    "red":0,
    "white":0,
};

function initGame() {
    assignRandomNumber();
    updateDOM();
    assignCrystalNumber();
    setEventListeners();
};

initGame(); 

function assignRandomNumber() {
    $randomNumber = Math.floor(Math.random() * 120 + 19);
    $('#randomNumber').html($randomNumber);
};

function assignCrystalNumber() {
    for(prop in crystals){
        crystals[prop] = Math.floor(Math.random() * 12) + 1;
    };
};

function updateDOM() {
    $('#wins').html($wins);
    $('#losses').html($losses);
    $('#totalScore').html($yourScore);
};

function setEventListeners() {
    $(".crystal").on('click', function(e){
        console.log(crystals);
        addYourScore(crystals[$(this).attr("data-color")]);
        checkIfUserWon();
        checkIfUserLost();
    });
};

function addYourScore(crystalVal) {
    $yourScore += crystalVal
    updateDOM();
};


function checkIfUserWon() {
    if ($yourScore === $randomNumber) {
        alert("Winner, winner, chicken dinner!");
        $yourScore = 0;
        updateDOM();
        initGame();
        $wins++;
    };
};

function checkIfUserLost() {
    if ($yourScore > $randomNumber) {
        alert("Sorry, mate. Shit outta luck!");
        $yourScore = 0;
        updateDOM();
        initGame();
        $losses++; 
    };
};


