import GameUI from "./gameUI.js";

class Game {
    constructor(board, gameUI) {
        this._board = board;
        this._gameUI = gameUI;
        this.guesses = 0;
    }    
    processGuess(guess) {

        let hit;
        if (guess) {
            this.guesses++;
            hit = this._board.fire(guess);
            if (hit && (this._board.ships.length === 0)) {
                this._gameUI.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
            }
        }
    }
}

export default Game