class GameUI {
    constructor(boardController) {
        // dont need the board from UI class, should be injected directly 
        this._boardController = boardController;
    }
    drawBoard() {
        let board, row, cells, boardCell;
        board = document.getElementById('p1-board');
        // create board
        this._boardController.grid.forEach(function(rowData) {
            row = document.createElement("tr");
            rowData.forEach(function(cellData) {
                boardCell = document.createElement("td");
                boardCell.setAttribute('class', 'gameBoard');
                boardCell.appendChild(document.createTextNode(cellData.name));
                boardCell.setAttribute("id", cellData.name);
                // cell.addEventListener('click', board.handleFiringEvent);
                row.appendChild(boardCell);
            });
            board.appendChild(row);
        });
    }
    drawScoreBoard(){
        let scoreBoard, tbl, tblBody, t, row, r, cell, shipStatus, th, hText;
        scoreBoard = document.getElementById('score');
        tbl = document.createElement('table');
        tblBody = document.createElement('tbody');
        let header = document.createElement('thead');
        header.appendChild(document.createTextNode('Fleet Status'));
        scoreBoard.appendChild(header);

        // put in the rows for the table 
        this._boardController.ships.forEach(function(rowData){
            row = document.createElement('tr');    
            th = document.createElement('th');
            hText = document.createTextNode(rowData.name);
            th.appendChild(hText);
            row.appendChild(th);
            for(r = 0; r < 1; r++){
                cell = document.createElement('td');
                cell.setAttribute('class', 'alive');
                cell.setAttribute('id', rowData.name);
                shipStatus = document.createTextNode('ALIVE');
                cell.appendChild(shipStatus);
                row.appendChild(cell);

            }
            tblBody.appendChild(row);
        })
        tbl.appendChild(tblBody);
        scoreBoard.appendChild(tbl);
        tbl.setAttribute('border', '2');
        
    }
    displayMessage(msg) {
        let messageArea;
        messageArea = document.getElementById('messageArea');
        messageArea.innerHTML = msg;
    }
    displayHit(guess) {
        let cell;
        cell = document.getElementById(guess);
        cell.setAttribute('class', 'hit');
    }
    displayMiss(guess) {
        let cell;
        cell = document.getElementById(guess);
        cell.setAttribute('class', 'miss');
    }
    displaySunk(ship, guess){
        let cell, score;
        ship.locations.forEach( function(loc) {
            cell = document.getElementById(loc);
            cell.setAttribute('class', 'sunk');
            score = document.getElementById(ship.name);
            score.setAttribute('class', 'scoreSunk');
            score.textContent = 'SUNK';
        });
    }
}

export default GameUI