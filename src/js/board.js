import {GameUI} from "./gameUI.js";

// class expression defining board
class Board {
    constructor(width, height) {
        // height and width can be changed to make a custom game, but must maintain state throughout game 
        this._width = width;
        this._height = height;
        this.grid = new Array(this._width);
        this.numShips = 3;
        this.shipsSunk = 0;
        this.shipLength = 3;
        this.ships = [{
            locations: ["06", "16", "26"],
            hits: ["", "", ""]
        }, {
            locations: ["24", "34", "44"],
            hits: ["", "", ""]
        }, {
            locations: ["10", "11", "12"],
            hits: ["", "", ""]
        }];
        for (var x = 0; x < this._width; x++) {
            this.grid[x] = new Array(height);
            for (var y = 0; y < this._height; y++) {
                this.grid[x][y] = {
                    name: x + "" + y
                };
            }
        }
        console.dir(this.grid);
    }
    fire(evt) {
        console.log(evt);
        for(var i = 0; i < this.numShips; i++) {
            var ship = this.ships[i];
            var index = ship.locations.indexOf(evt);
            if (index >= 0) {
                // We have a hit!
                ship.hits[index] = "hit";
                gameUI.displayHit(evt);
                gameUI.displayMessage("HIT!")
                if (this.isSunk(ship)) {
                    gameUI.displayMessage("You sank my battleship");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        gameUI.displayMiss(evt);
        gameUI.displayMessage("You missed.");
        return false;
    }    
    isSunk(ship){
        // takes a ship and looks at it's locations for a hit
        for (var i = 0; i < this.shipLength; i++) {
            if(ship.hits[i] !== "hit") {
                // if there's a location without a hit, the ship is afloat
                return false;
            }
            // otherwise the ship is sunk
            return true;
        }
    }
}
var gameBoard = new Board(10, 10);
var gameUI = new GameUI(gameBoard);
gameUI.drawBoard();
gameBoard.fire("53");
gameBoard.fire("06"); 
gameBoard.fire("16");
gameBoard.fire("26");
gameBoard.fire("34"); 
gameBoard.fire("24"); 
gameBoard.fire("44");
gameBoard.fire("12"); 
gameBoard.fire("11"); 
gameBoard.fire("10");

export {Board}