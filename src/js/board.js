import GameUI from "./gameUI.js";

// class expression defining board
class Board {
    constructor(width, height) {
        // height and width can be changed to make a custom game, but must maintain state throughout game 
        this._width = width;
        this._height = height;
        this.grid = new Array(this._width);
        for (var x = 0; x < this._width; x++) {
            this.grid[x] = new Array(height);
            for(var y = 0; y < this._height; y++) {
                this.grid[x][y] = {name: "(" + x + ", " + y + ")"};
            }
        }
        console.dir(this.grid);
    }
// function to place ships onto the grid
    placeShips(id){
        var area;
        var isEmpty = false;
        while (!isEmpty) {
            isEmpty = true;
            var position = Math.random();

        }
    }
    // fire(x, y) {
    //     this.grid[x][y] = "H";
    // }
}
var gameBoard = new Board(10, 10);
var gameUI = new GameUI(gameBoard);
gameUI.drawBoard();




function Ship(id, shipName, shipSize, shipDirection) {
    this.id = id;
    this.shipName = shipName;
    this.shipSize = shipSize;
    this.shipDirection = shipDirection;
}

// var fleet = [
//     {id: 1, shipName: "Aircraft Carrier", shipSize: 5}, 
//     {id: 2, shipName: "Battleship", shipSize: 4}, 
//     {id: 3, shipName: "Submarine", shipSize: 3}, 
//     {id: 4, shipName: "Cruiser", shipSize: 3},   
//     {id: 5, shipName: "Destroyer", shipSize: 2}
// ];