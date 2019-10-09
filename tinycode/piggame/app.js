/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that,
 it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/
var WINNER = 100;
function Player (id,playing) {
  this.id = id;
  this.playing = playing;
  this.rolledValue = 0;
  this.roundScore = 0;
  this.globalScore = 0;
}
var player0 = new Player(0,true);
var player1 = new Player(1,false);
document.onload(reset());
function getCurrentPlayer(){
    if(player0.playing==true){
        return player0;
    }  else if(player1.playing==true){
        return player1;
    }
}

function updateScreen(){
    document.getElementById("score-"+ getCurrentPlayer().id).innerHTML = getCurrentPlayer().globalScore;
    document.getElementById("current-"+ getCurrentPlayer().id).innerHTML = getCurrentPlayer().roundScore;
}

function reset(){
    for(var i = 0; i<2; i++) {
        document.getElementById("score-" + i).innerHTML = 0;
        document.getElementById("current-" + i).innerHTML = 0;
    }
    this.player0 = new Player(0,true);
    this.player1 = new Player(1,false);
}

function rollDice(){
  generateDiceValue();
  evaluateScore(getCurrentPlayer());
    updateScreen();
}

function generateDiceValue(){
  var diceValue = Math.floor(Math.random() * 6) + 1;
  document.getElementsByClassName("dice")[0].setAttribute("src","dice-"+ diceValue +".png");
    getCurrentPlayer().rolledValue = diceValue;

}

function evaluateScore(player){
  if(player.rolledValue == 1) {
      player.roundScore = 0;
      player.rolledValue = 0;
      holdRound();
  }else if(player.rolledValue>1){
      player.roundScore = player.roundScore+player.rolledValue;
      player.rolledValue = 0;
  }
  player.roundScore = player.roundScore + player.rolledValue;
  document.getElementById("current-"+ player.id).innerHTML = player.roundScore;
}

function switchPlayer() {
    var className = "player-" + getCurrentPlayer().id + "-panel";
    var active = className + " active";
    document.getElementsByClassName(active)[0].setAttribute("class", className);
    if(getCurrentPlayer().id == 0){
        player0.playing = false;
        player1.playing = true;
    }else if (getCurrentPlayer().id == 1){
        player0.playing = true;
        player1.playing = false;
    }
    className = "player-" + getCurrentPlayer().id + "-panel";
    active = className + " active";
    document.getElementsByClassName(className)[0].setAttribute("class", active);
}

function holdRound(){
    evaluateScore(getCurrentPlayer());
    getCurrentPlayer().globalScore = getCurrentPlayer().globalScore + getCurrentPlayer().roundScore;
    getCurrentPlayer().roundScore = 0;
    updateScreen();
    if(getCurrentPlayer().globalScore >=WINNER){
        document.getElementById("name-"+ getCurrentPlayer().id).innerHTML = "Winner";
        setTimeout(function() { reset()}, 10000);
        } else {
        switchPlayer();

    }
}
