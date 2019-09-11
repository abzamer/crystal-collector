var crystal = {
    Blue: {
        name: "blue",
        value: 0
    },
    Red: {
        name: "red",
        value: 0
    },
    Green: {
        name: "green",
        value: 0
    },
    Yellow: {
        name: "yellow",
        value: 0
    }
};

var wins = 0;
var losses = 0;
var currentScore=0;
var goal=0;

function newGame() {
    //chooose random score num
    goal = Math.floor(Math.random()*120)+19;
    console.log(goal);
    //random crystal val function being called
    crystalValue(crystal);
    //set vars to 0 
    currentScore=0;
};

function crystalValue (crystal) {
    crystal.Blue.value = Math.floor(Math.random()*12)+1;
    crystal.Red.value = Math.floor(Math.random()*12)+1;
    crystal.Green.value = Math.floor(Math.random()*12)+1;
    crystal.Yellow.value = Math.floor(Math.random()*12)+1;
    console.log(crystal);
};

$(".crystal").on("click", function(){
    var crystalValue = $(this).data("score");
    console.log(crystalValue);

    //check the value from the array, add it to currentScore & see if they have gone above the goalScore
})


newGame();