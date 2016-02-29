import {Board} from "./board.js";
import {GameUI} from "./gameUI.js";

function init() {
    let cells, cell, c; 
    cells =  document.getElementsByTagName("td");
    for(c = 0; c < cells.length; c++){
        cell = cells[c];
        cell.addEventListener("click", handleFiringClick);
    }
}   


window.onload = init;

class Game {
    constructor(board) {
        this._board = board;
        this.guesses = 0;
    }    
    processGuess(guess) {
        let hit;
        if (guess) {
            this.guesses++;
            hit = gameBoard.fire(guess);
            if (hit && gameBoard.shipsSunk === gameBoard.numShips) {
                GameUI.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
            }
        }
    }
}

function handleFiringClick(e){
    let guess;
    guess = e.target.id;
    game.processGuess(guess);
}

let gameBoard = new Board(10, 10);
var gameUI = new GameUI(gameBoard);
gameUI.drawBoard(); 
let game = new Game(gameBoard);