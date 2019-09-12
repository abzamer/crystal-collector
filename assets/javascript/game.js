var wins = 0;
var losses = 0;
var currentScore=0;
var goal=0;

function newGame() {
    //chooose random score num
    goal = Math.floor(Math.random()*120)+19;
    console.log(goal);
    //random crystal val function being called
    crystalValue();
    //set vars to 0 
    currentScore=0;
};

function crystalValue () {
    $("#blue").val(Math.floor(Math.random()*12)+1);
    $("#yellow").val(Math.floor(Math.random()*12)+1);
    $("#green").val(Math.floor(Math.random()*12)+1);
    $("#red").val(Math.floor(Math.random()*12)+1);
};

$(".crystal").on("click", function(){
    var crystalValue = parseInt($(this).val());
    console.log(crystalValue);

    // currentScore = currentScore + crystalValue;
    currentScore += crystalValue;
    if (currentScore > goal){
        userLoses();
        console.log("You LOST, SUCKA!");
    } else if (currentScore === goal) {
        userWins();
        console.log("Wassssuuuuppp!!!");
    };
})

function userWins(){
    wins++;
    newGame();
    alert("time for a new game");
};

function userLoses(){
    losses++;
    newGame();
    alert("wanna try again??");
};


newGame();