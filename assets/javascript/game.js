var crystal = [
    {Blue: {
        name: "blue",
        value: 0
    }},
    {Red: {
        name: "red",
        value: 0
    }},
    {Green: {
        name: "yellow",
        value: 0
    }},
    {Yellow: {
        name: "green",
        value: 0
    }}
];

var wins = 0;
var losses = 0;
var currentScore=0;
var goal=0;

function startUp() {
    //chooose random score num
    goal = Math.floor(Math.random()*120)+19;
    console.log(goal);
    //random crystal val

    //set vars to 0 
}

function crystalValue (crystal) {
    crystal[0].Blue.value = Math.floor(Math.random()*12)+1;
    crystal[1].Red.value = Math.floor(Math.random()*12)+1;
    crystal[2].Green.value = Math.floor(Math.random()*12)+1;
    crystal[3].Yellow.value = Math.floor(Math.random()*12)+1;
    console.log(crystal[0], crystal[1],crystal[2],crystal[3],);
}


crystalValue(crystal);
// startUp();