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
