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
    drawBoard() {
        var board = document.getElementById("p1-board");
        // create board
        this.grid.forEach(function(rowData) {
            var row = document.createElement("tr");
            rowData.forEach(function(cellData) {
                var cell = document.createElement("td");
                cell.appendChild(document.createTextNode(cellData.name));
                row.appendChild(cell);
            });
            board.appendChild(row);
        });
    }
    fire(x, y) {
        this.grid[x][y] = "H";
    }
}
var gameBoard = new Board(10, 10);
gameBoard.drawBoard();


function Ship(id, shipName, shipSize) {
    this.id = id;
    this.shipName = shipName;
    this.shipSize = shipSize;
}



// var fleet = [
//     {id: 1, shipName: "aircraft carrier", shipSize: 5, shipPosition:[]}, 
//     {id: 2, shipName: "battleship", shipSize: 4, shipPosition:[]}, 
//     {id: 3, shipName: "submarine", shipSize: 3, shipPosition:[]}, 
//     {id: 4, shipName: "cruiser", shipSize: 3, shipPosition:[]},   
//     {id: 5, shipName: "destroyer", shipSize: 2, shipPosition:[]}
// ];