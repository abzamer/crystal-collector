//variables to hold wins, losses, Goal score, and current score
var wins = 0;
var losses = 0;
var currentScore=0;
var goal=0;

$("userWins").text("Wins: ");
$("userLosses").text("Losses: ");

function newGame() {
    //chooose random score num
    goal = Math.floor(Math.random()*50)+15;
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

function userWins(){
    wins++;
    newGame();
    alert("You won!");
    $(".userWins").text("Wins: " + wins);
};

function userLoses(){
    losses++;
    newGame();
    alert("You lost. Want to try again?");
    $(".userLosses").text("Losses: " + losses);
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

newGame();