import GameUI  from "./gameUI.js";
import Game  from "./game.js";

// class expression defining board
class Board {
    constructor(width, height, gameUI) {
        let x, y;
        // height and width can be changed to make a custom game, but must maintain state throughout game 
        this._width = width;
        this._height = height;
        this.grid = new Array(this._width);
        // this.numShips = 3;
        this._gameUI = new GameUI(this);
        this.shipsSunk = [];
        this.fleet = [{
            generateShipLocations: function() {
                let locations, i;
                for(i = 0; i < this.ships.length; i++) {
                    do {
                        locations = this.generateShip();
                    } while (this.collision(locations));
                    this.ships[i].locations = locations;
                }
            },
            generateShip: function(){
                let direction, row, col, newShipLocations, i;
                direction = Math.floor(Math.random() * 2);
                if (direction === 1) {
                    // horizontal ship
                    row = Math.floor(Math.random() * this._width);
                    col = Math.floor(Math.Math.random() * (this._height - this.shipLength));
                } else {
                    // vertical ship
                    row = Math.floor(Math.random() * (this._width - this.shipLength));
                    col = Math.floor(Math.random() * this._width);
                }
                newShipLocations = [];
                for(i = 0; i < this.shipLength; i++) {
                    if (direction === 1) {
                        newShipLocations.push(row + "" + (col + i));
                    } else {
                        newShipLocations.push((row + i) + "" + col);
                    }
                }
                return newShipLocations;
            },
            collision: function (locations) {
                let ship, i, j;
                for (i = 0; i < this.fleet.length; i++) {
                    ship = this.ships[i];
                    for( j = 0; j < locations.length; j++) {
                        if(ship.locations.indexOf(locations[j]) >= 0) {
                            return true
                        }
                    }
                }
                return false;
            }
        }];
        this.ships = [{
            name: "destroyer",
            locations: ["06", "16", "26"],
            hits: ["", "", ""]
        }, {
            name: "battleship",
            locations: ["24", "34", "44"],
            hits: ["", "", ""]
        }, {
            name: "submarine",
            locations: ["10", "11", "12"],
            hits: ["", "", ""]
        }];
        for (x = 0; x < this._width; x++) {
            this.grid[x] = new Array(height);
            for (y = 0; y < this._height; y++) {
                this.grid[x][y] = {
                    name: x + "" + y
                };
            }
        }
    }

    fire(guess) {
        let i, ship, index;
        console.log(guess);
        for(i = 0; i < this.ships.length; i++) {
            ship = this.ships[i];
            index = ship.locations.includes(guess);
            if (index === true) {
                // We have a hit!
                ship.hits[index] = "hit";
                this._gameUI.displayHit(guess);
                this._gameUI.displayMessage(ship.name + " HIT!")
                if (this.isSunk(ship)) {
                    this.ships.pop(ship);
                }
                return true;
            }
        }
        this._gameUI.displayMiss(guess);
        this._gameUI.displayMessage("You missed.");
        return false;
    }    
    isSunk(ship){
        let i, sunkenShip;
        // takes a ship and looks at it's locations for a hit
        for (i = 0; i < ship.hits.length; i++) {
            if(ship.hits.includes("")) {
                // if there's a location without a hit, the ship is afloat
                return false;
            }
            this._gameUI.displayMessage("You sank my " + ship.name);
            this.shipsSunk.push(ship);
            // otherwise the ship is sunk
            return true;
        }
    }
}

export default Board
