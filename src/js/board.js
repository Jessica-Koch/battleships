import GameUI from "./gameUI.js";
import Game from "./game.js";

// class expression defining board
// serves as app Model
class Board {
    constructor(width, height, gameUI) {
        let x, y, cells, cell;
        // height and width can be changed to make a custom game, but must maintain state throughout game 
        this._width = width;
        this._height = height;
        this.grid = new Array(this._width);
        this.numShips = 5;
        this._gameUI = new GameUI(this);
        this.shipsSunk = [];
        this.ships = [{
            name: "Aircraft Carrier",
            size: 5,
                locations: [],
                hits: ["", "", "", "", ""]
        }, {
            name: "Battleship",
            size: 4,
                locations: [],
                hits: ["", "", "", ""]
        }, {
            name: "Submarine",
            size: 3,
            locations: [],
            hits: ["", "", ""]
        }, {
            name: "Destroyer",
            size: 3,
            locations: [],
            hits: ["", "", ""]
        }, {
            name: "Patrol Boat",
            size: 2,
            locations: [],
            hits: ["", ""]

        }];
        cells = document.getElementById('td');
        for (x = 0; x < this._width; x++) {
            this.grid[x] = new Array(height);
            for (y = 0; y < this._height; y++) {
                this.grid[x][y] = {
                    name: x + "" + y
                };
            }
        }
    }
    generateShipLocations(){
        let locations, i;
        for(i = 0; i < this.numShips; i++){
            do {
                locations = this.generateShip();
            } while (this.collision(locations));
            this.ships[i].locations = locations;
        }
    }
    generateShip(){
        let direction, row, col, newShipLocations, i;
        direction = Math.floor(Math.random() * 2);
        if (direction === 1) {
            // Generate horizontal ship location
            row = Math.floor(Math.random() * this._width);
            col = Math.floor(Math.random() * (this._width - this.numShips));
        } else {
            // Generate vertical ship direction 
            row = Math.floor(Math.random() * (this._height - this.numShips));
            col = Math.floor(Math.random() * this._height);
        }
        newShipLocations = [];
        for(i = 0; i < this.numShips; i++){
            if (direction === 1) {
                // add location for horizontal ship
                newShipLocations.push(row + '' + (col + i));
            }
            else {
                // add location for vertical ship
                newShipLocations.push((row + i) + '' + col);
            }
        }
        return newShipLocations;
    }
    collision(locations){
        let i, ship, j;
        for (i = 0; i < this.numShips; i++) {
            ship = this.ships[i]; // for each ship already on teh board
            // check to see if any of the locations in teh new ship location are taken
            for (j = 0; j < locations.length; j++) {
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }
        return false;
    }
    fire(guess) {
        let i, ship, index, wasHit;

        for (i = 0; i < this.ships.length; i++) {
            ship = this.ships[i];
            wasHit = ship.locations.includes(guess);
            index = ship.locations.indexOf(guess);
            if (wasHit === true) {
                // We have a hit!
                ship.hits[index] = "hit";
                // console.log(ship.hits[index]);
                this._gameUI.displayHit(guess);
                this._gameUI.displayMessage(ship.name + " HIT!")
                if (this.isSunk(ship)) {
                    this.ships.splice(this.ships.indexOf(ship), 1);
                }
                return true;
            }
        }
        this._gameUI.displayMiss(guess);
        this._gameUI.displayMessage("You missed.");
        return false;
    }
    isSunk(ship) {
        let i, sunkenShip;
        // takes a ship and looks at it's locations for a hit
        for (i = 0; i < ship.hits.length; i++) {
            if (ship.hits.includes("")) {
                // if there's a location without a hit, the ship is afloat
                return false;
            }
            this._gameUI.displayMessage("You sank my " + ship.name);
            this.shipsSunk.push(ship);
            this._gameUI.displaySunk(ship)
                // otherwise the ship is sunk
            return true;
        }
    }
}

export default Board