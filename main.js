document.addEventListener('DOMContentLoaded', function() {
  var a1 = document.getElementById('a1');
  var a2 = document.getElementById('a2');
  var a3 = document.getElementById('a3');
  var b1 = document.getElementById('b1');
  var b2 = document.getElementById('b2');
  var b3 = document.getElementById('b3');
  var c1 = document.getElementById('c1');
  var c2 = document.getElementById('c2');
  var c3 = document.getElementById('c3');

});



var players = [];
var markers = [ 'X', 'O'];
players[0] = "Rosencrantz";
players[1] = "Guildenstern";
var whoseTurn = 0;
var gameOver = false;

function play(clickedDiv) {
  if (clickedDiv.innerHTML === '') {
    if (gameOver === false) {
      clickedDiv.innerHTML = '<span>' + markers[whoseTurn] + '</span>';
      checkWinner();
    }
    if (gameOver === false) {
      toggle();
    }
  }
}

function toggle() {
  if (whoseTurn === 0){
    whoseTurn ++;
  }   else {
    whoseTurn = 0;
  }
  document.getElementById("messenger").innerText=players[whoseTurn];
}


function winnerText() {
  document.getElementById("messenger").innerText=players[whoseTurn] + ' WINS!!';
  gameOver = true;
}

function checkDraw() {
  // if (a1.innerText != "" && a2.innerText != "" && a3.innerText != "" && b1.innerText != "" && b2.innerText != "" && b3.innerText != "" && c1.innerText != "" && c2.innerText != "" && c3.innerText != "") {
  //   document.getElementById("messenger").innerText = 'DRRAAWW!!';
  //   gameOver = true;
  // }
  var cells = [a1,a2,a3,b1,b2,b3,c1,c2,c3];
  var newCells = cells.filter(cell => cell.innerText != '');
  if(cells.length === newCells.length) {
  // if(cells.forEach(function(cell) {
  //   cell.innerText != ''
  // })) {
      gameOver = true;
      console.log('DRRRAAAAWWW!!!');
      document.getElementById("messenger").innerText = 'DRRAAWW!!';
  };
}


function checkWinner() {
  if (a1.innerText === a2.innerText && a2.innerText === a3.innerText && a3.innerText != '') {
    winnerText();
  } else if (b1.innerText === b2.innerText && b2.innerText === b3.innerText && b3.innerText != '') {
    winnerText();
  } else if (c1.innerText === c2.innerText && c2.innerText === c3.innerText && c3.innerText != '') {
    winnerText();
  } else if (a1.innerText === b1.innerText && b1.innerText === c1.innerText && c1.innerText != '') {
    winnerText();
  } else if (a2.innerText === b2.innerText && b2.innerText === c2.innerText && c2.innerText != '') {
    winnerText();
  } else if (a3.innerText === b3.innerText && b3.innerText === c3.innerText && c3.innerText != '') {
    winnerText();
  } else if (a1.innerText === b2.innerText && b2.innerText === c3.innerText && c3.innerText != '') {
    winnerText();
  } else if (c1.innerText === b2.innerText && b2.innerText === a3.innerText && a3.innerText != '') {
    winnerText();
  } else {
    checkDraw();
  }
}
