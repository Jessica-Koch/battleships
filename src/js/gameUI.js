class GameUI {
    constructor(board) {
        // dont need the board from UI class, should be injected directly 
        this._board = board;
    }
    drawBoard() {
        let board, row, cells, cell;
        board = document.getElementById('p1-board');
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
    drawScoreBoard(){
        let scoreBoard, tbl, tblBody, t, row, r, cell, shipStatus, th, hText;
        scoreBoard = document.getElementById('score');
        tbl = document.createElement('table');
        tblBody = document.createElement('tbody');
        let header = document.createElement('thead');
        header.appendChild(document.createTextNode('Fleet Status'));
        scoreBoard.appendChild(header);
        for(t = 0; t < this._board.ships.length; t++){
            row = document.createElement('tr');    
            th = document.createElement('th');
            hText = document.createTextNode(this._board.ships[t].name);
            th.appendChild(hText);
            row.appendChild(th);
            for(r = 0; r < 1; r++){
                cell = document.createElement('td');
                cell.setAttribute('class', 'alive');
                cell.setAttribute('id', this._board.ships[r].name);
                shipStatus = document.createTextNode('ALIVE');
                // shipStatus.style.color = 'red'
                cell.appendChild(shipStatus);
                row.appendChild(cell);
            }
            tblBody.appendChild(row);
        }
        tbl.appendChild(tblBody);
        scoreBoard.appendChild(tbl);
        tbl.setAttribute('border', '2');
    }
    updateScoreBoard(ship){
        let ship, sunkenShip;
        for (var i = 0; i < this._board.ships.length; i++) {
            ship = this._board.ships[i];
        }
        sunkenShip = document.getElementById(ship.name);
        sunkenShip.textContent = 'SUNK';
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
        let cell;
        // cells = document.getElementById(ship.locations);
        this.updateScoreBoard();
        ship.locations.forEach( function(loc) {
            cell = document.getElementById(loc);    
            cell.setAttribute('class', 'sunk');
        });
    }
}

export default GameUI