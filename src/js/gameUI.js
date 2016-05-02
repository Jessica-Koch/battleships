class GameUI {
    constructor(board) {
        // dont need the board from UI class, should be injected directly 
        this._board = board;
    }
    drawBoard() {
        let board, row, cells, cell;
        board = document.getElementById("p1-board");
        // create board
        this._board.grid.forEach(function(rowData) {
            row = document.createElement("tr");
            rowData.forEach(function(cellData) {
                cell = document.createElement("td");
                cell.appendChild(document.createTextNode(cellData.name));
                cell.setAttribute("id", cellData.name);
                // cell.addEventListener('click', board.handleFiringEvent);
                row.appendChild(cell);
            });
            board.appendChild(row);
        });
    }
    displayMessage(msg) {
        let messageArea;
        messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    }
    displayHit(guess) {
        let cell;
        cell = document.getElementById(guess);
        cell.setAttribute("class", "hit");
    }
    displayMiss(guess) {
        let cell;
        cell = document.getElementById(guess);
        cell.setAttribute("class", "miss");
    }
    displaySunk(ship, guess){
        let cell;
        // cells = document.getElementById(ship.locations);
        ship.locations.forEach( function(loc) {
            cell = document.getElementById(loc);    
            cell.setAttribute('class', 'sunk');
            cell.setAttribute('disabled', true);    
        });
    }
}

export default GameUI