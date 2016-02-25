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
                cell.setAttribute("id", cellData.name);
                cell.addEventListener("click", function(event) {
                    event.target.style.backgroundColor = "#00cccc"
                })
                row.appendChild(cell);
            });
            board.appendChild(row);
        });
    }
    displayMessage(msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    }
    displayHit(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    }
    displayMiss(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
}
export {GameUI as default}