var dimension = 10;

var grid = new Array(dimension);

var i, j, row, cell;

// create table
var p1Board = document.getElementById("p1-board");

for(i = 0; i < grid.length; i++){
    grid[i] = new Array(dimension);
    row = document.createElement("tr");
    for (j = 0; j < grid[i].length; j++) {
        cell = document.createElement("td");
        cell.setAttribute("id", "" + i + j);
        row.appendChild(cell);
    }
    p1Board.appendChild(row);
}


var fleet = [
    {id: 1, shipName: "aircraft carrier", shipSize: 5, shipPosition:[]}, 
    {id: 2, shipName: "battleship", shipSize: 4, shipPosition:[]}, 
    {id: 3, shipName: "submarine", shipSize: 3, shipPosition:[]}, 
    {id: 4, shipName: "cruiser", shipSize: 3, shipPosition:[]},   
    {id: 5, shipName: "destroyer", shipSize: 2, shipPosition:[]}
];
