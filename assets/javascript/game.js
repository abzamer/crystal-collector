//variables to hold wins, losses, Goal score, and current score
var wins = 0;
var losses = 0;
var currentScore=0;
var goal=0;

//puts wins & losses into html
userWins.innerHTML = wins;
userLosses.innerHTML = losses;

function newGame() {
    //chooose random score num
    goal = Math.floor(Math.random()*120)+19;
    console.log(goal);
    $("#target").text(goal);
    //random crystal val function being called
    crystalValue();
    //set vars to 0 
    currentScore=0;
    
};

function crystalValue () {
    $("#purple").val(Math.floor(Math.random()*12)+1);
    $("#white").val(Math.floor(Math.random()*12)+1);
    $("#green").val(Math.floor(Math.random()*12)+1);
    $("#red").val(Math.floor(Math.random()*12)+1);
};

$(".crystal").on("click", function(){
    var crystalValue = parseInt($(this).val());
    console.log(crystalValue);

    // currentScore = currentScore + crystalValue;
    currentScore += crystalValue;
    console.log("Now you are at:" + currentScore);
    if (currentScore > goal){
        userLoses();
        // console.log("You LOST, SUCKA!");
    } else if (currentScore === goal) {
        userWins();
        // console.log("Wassssuuuuppp!!!");
    };
    $("#score").text(currentScore);
});

function userWins(){
    wins++;
    newGame();
    alert("You won!");
};

function userLoses(){
    losses++;
    newGame();
    alert("You lost. Want to try again?");
};


newGame();