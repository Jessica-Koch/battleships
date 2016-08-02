import GameUI from "./gameUI.js";

class Game {
    constructor(boardController, gameUI) {
        this._boardController = boardController;
        this._gameUI = gameUI;
        this.guesses = 0;
    }    
    processGuess(guess) {
        let hit, ship, s, sunk, sunkenShips;
        if (guess) {
            this.guesses++;
            hit = this._boardController.fire(guess);
            if (hit && this._boardController.ships.length === 0) {
                this._gameUI.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
            }

        }
    }
}

export default Game