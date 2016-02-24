// class expression defining board
class Board {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.grid = new Array(this.width);
        for (var i = 0; i < this.width; i++) {
            this.grid[i] = new Array(height);
            for(var j = 0; j < this.height; j++) {
                this.grid[i][j] = {name: "(" + i + ", " + j + ")"};
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
}
var gameBoard = new Board(10, 10).drawBoard();
// board.appendChild(gameBoard);


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