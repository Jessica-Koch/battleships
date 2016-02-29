import GameUI from "./gameUI.js";

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
        for (let x = 0; x < this._width; x++) {
            this.grid[x] = new Array(height);
            for (let y = 0; y < this._height; y++) {
                this.grid[x][y] = {
                    name: x + "" + y
                };
            }
        }
        // console.dir(this.grid);
    }
    fire(guess) {
        let i, ship, index;
        for(i = 0; i < this.numShips; i++) {
            ship = this.ships[i];
            index = ship.locations.indexOf(guess);
            if (index >= 0) {
                // We have a hit!
                ship.hits[index] = "hit";
                gameUI.displayHit(guess);
                gameUI.displayMessage("HIT!")
                if (this.isSunk(ship)) {
                    gameUI.displayMessage("You sank my battleship");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        GameUI.displayMiss(guess);
        GameUI.displayMessage("You missed.");
        return false;
    }    
    isSunk(ship){
        let i;
        // takes a ship and looks at it's locations for a hit
        for (i = 0; i < this.shipLength; i++) {
            if(ship.hits[i] !== "hit") {
                // if there's a location without a hit, the ship is afloat
                return false;
            }
            // otherwise the ship is sunk
            return true;
        }
    }
}


export {Board}