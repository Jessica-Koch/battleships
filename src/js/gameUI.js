import * as THREE from "three";

// importing a module with options isn't supported yet so we need to require orbitControls
const OrbitControls  = require('three-orbit-controls')(THREE);

class GameUI {
    constructor(boardController) {
        // dont need the board from UI class, should be injected directly 
        this._boardController = boardController;

        // setup threeJs boilerplate
        this._renderer = null;
        this._camera = null;
        this._scene = null;
        this._cameraController = null;

        this.setup();
        
    }

    setup() {
        let viewWidth, viewHeight, containerEl, cameraController;

        containerEl = document.getElementById("threeBoardContainer");
        viewHeight = containerEl.offsetHeight;
        viewWidth = containerEl.offsetWidth;

        this._renderer = new THREE.WebGLRenderer({
            antialias: true
        });
        this._renderer.setSize(viewWidth, viewHeight);

        this._scene = new THREE.Scene();

        this._camera = new THREE.PerspectiveCamera(35, viewWidth / viewHeight, 1, 1000);
        this._camera.position.set(0, 120, 150);
        this._cameraController = new OrbitControls(this._camera, containerEl);
        this._scene.add(this._camera);

        containerEl.appendChild(this._renderer.domElement);
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