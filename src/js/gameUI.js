class GameUI {
    constructor(board) {
        // dont need the board from UI class, should be injected directly 
        this._board = board;
    }
    drawBoard() {
        let board = document.getElementById("p1-board");
        // create board
        this._board.grid.forEach(function(rowData) {
            let row = document.createElement("tr");
            rowData.forEach(function(cellData) {
                let cell = document.createElement("td");
                cell.appendChild(document.createTextNode(cellData.name));
                cell.setAttribute("id", cellData.name);
                row.appendChild(cell);
            });
            board.appendChild(row);
        });
    }
    displayMessage(msg) {
        let messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    }
    displayHit(location) {
        console.log(location);
        let cell = document.getElementById(location);
        cell.addEventListener("click", function(event) {
            console.log(event.target.id);
        })
        hit.setAttribute("class", "hit");
    }
    displayMiss(location) {
        let cell = document.getElementById(location);
        cell.addEventListener("click", function(event) {
            console.log(event);
            let evt = event.target.id;
            return evt;
        })
        cell.setAttribute("class", "miss");
    }
}

export default GameUI;