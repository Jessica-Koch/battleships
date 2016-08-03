import GameUI from './gameUI.js';
import Game from './game.js';
import BoardController from './boardController.js';

let boardController = new BoardController(10, 10, gameUI);
let gameUI = new GameUI(boardController);

function init() {
    let cells, cell, c;
    cells = document.querySelectorAll("td.gameBoard");
    for (c = 0; c < cells.length; c++) {
        cell = cells[c];
        cell.addEventListener('click', handleFiringClick);
        
    }
}


window.onload = init;

function handleFiringClick(e) {
    let guess;
    guess = e.target.id;
    game.processGuess(guess);

    if (gameUI.displayHit) {
            this.removeEventListener('click', handleFiringClick);
    }
}

gameUI.drawBoard();
gameUI.initObjects();

gameUI.drawScoreBoard();
boardController.generateShipLocations();
let game = new Game(boardController, gameUI);