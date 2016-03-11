import GameUI from "./gameUI.js";
import Game from "./game.js";
import Board from "./board.js";

let gameBoard = new Board(10, 10, gameUI);
let gameUI = new GameUI(gameBoard);

function init() {
    let cells, cell, c;
    cells = document.getElementsByTagName("td");
    for (c = 0; c < cells.length; c++) {
        cell = cells[c];
        cell.addEventListener("click", handleFiringClick);
    }
}


window.onload = init;

function handleFiringClick(e) {
    let guess;
    guess = e.target.id;
    game.processGuess(guess);
}

gameUI.drawBoard();
let game = new Game(gameBoard, gameUI);