import GameUI from "./gameUI.js";

class Game {
    constructor(board) {
        this._board = board;
        this.guesses = 0;
    }    
    processGuess(guess) {
        let hit;
        if (guess) {
            this.guesses++;
            hit = this._board.fire(guess);
            if (hit && this._board.shipsSunk === this._board.numShips) {
                gameUI.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
            }
        }
    }
}

export default Game