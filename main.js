
var players = [];
var markers = [ 'X', 'O'];
var whoseTurn = 0;
players[0] = "Rozencrantz";
players[1] = "Guildenstern";
//alert (markers[whoseTurn]);

//BUILD board


//PLAY THE GAME
function play(clickedDiv) {
  clickedDiv.innerHTML = '<span>' + markers[whoseTurn] + '</span>';
  toggle();
}

function toggle() {
  if (whoseTurn === 0){
    whoseTurn ++;
  }   else {
    whoseTurn = 0;
  }

  document.getElementById("game-message").innerText=players[whoseTurn]
}


//CREATE PLAYERS


//KEEP TRACK OF WHOSE TURN


//WIN ALGORITHM
