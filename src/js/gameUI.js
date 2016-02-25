class GameUI {
    constructor(board) {
        // dont need the board from UI class, should be injected directly 
        this._board = board;
    }
    drawBoard() {
        var board = document.getElementById("p1-board");
        // create board
        this._board.grid.forEach(function(rowData) {
            var row = document.createElement("tr");
            rowData.forEach(function(cellData) {
                var cell = document.createElement("td");
                cell.appendChild(document.createTextNode(cellData.name));
                cell.addEventListener("click", function(event) {
                    event.target.style.backgroundColor = "#00cccc"
                })
                row.appendChild(cell);
            });
            board.appendChild(row);
        });
    }
}
export {GameUI as default}