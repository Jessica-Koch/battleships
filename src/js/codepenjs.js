// class GameUI {
//   constructor(board) {
//       // dont need the board from UI class, should be injected directly
//       this._board = board;

//     // setup threeJs boilerplate
//       this._renderer = null;
//       this._camera = null;
//       this._scene = null;
//       this._cameraController = null;

//       this.createCamera();
//       // this.setup();
//       // this.createBoard();  // create board

//   }

//   createCamera(){
//     let HEIGHT, WIDTH, aspectRatio, fieldOfView, nearBoard, farBoard, camera;

//     // Need to get width and height of the window for the camera
//     HEIGHT = window.innerHeight;
//     WIDTH = window.innerWidth;

//     // Create camera
//     aspectRatio = WIDTH / HEIGHT;
//     fieldOfView = 60;
//     nearBoard = 1;
//     farBoard = 10000;
//     this._camera = new THREE.PerspectiveCamera(
//       fieldOfView,
//       aspectRatio,
//       nearBoard,
//       farBoard
//     );

//       // this._cameraController = new THREE.OrbitControls(this._camera, containerEl);

//     // Set camera position
//     this._camera.position.x
//   }

// //     CSS Board
//   drawBoard() {
//       let board, row, cells, boardCell;
//       board = document.getElementById("p1-board");
//       // create board
//       this._board.grid.forEach(function(rowData) {
//           row = document.createElement("tr");
//           rowData.forEach(function(cellData) {
//               boardCell = document.createElement("td");
//               boardCell.setAttribute("class", "gameBoard");
//               boardCell.appendChild(document.createTextNode(cellData.name));
//               boardCell.setAttribute("id", cellData.name);
//               // cell.addEventListener('click', board.handleFiringEvent);
//               row.appendChild(boardCell);
//           });
//           board.appendChild(row);
//       });
//   }
// drawScoreBoard() {
//   let scoreBoard, tbl, tblBody, t, row, r, cell, shipStatus, th, hText;
//       scoreBoard = document.getElementById('score');
//       tbl = document.createElement('table');
//       tblBody = document.createElement('tbody');
//       let header = document.createElement('thead');
//       header.appendChild(document.createTextNode('Fleet Status'));
//       scoreBoard.appendChild(header);

//       // put in the rows for the table
//       this._board.ships.forEach(function(rowData){
//           row = document.createElement('tr');
//           th = document.createElement('th');
//           hText = document.createTextNode(rowData.name);
//           th.appendChild(hText);
//           row.appendChild(th);
//           for(r = 0; r < 1; r++){
//               cell = document.createElement('td');
//               cell.setAttribute('class', 'alive');
//               cell.setAttribute('id', rowData.name);
//               shipStatus = document.createTextNode('ALIVE');
//               cell.appendChild(shipStatus);
//               row.appendChild(cell);

//           }
//           tblBody.appendChild(row);
//       })
//       tbl.appendChild(tblBody);
//       scoreBoard.appendChild(tbl);
//       tbl.setAttribute('border', '2');
// }
//   displayMessage(msg) {
//       let messageArea;
//       messageArea = document.getElementById("messageArea");
//       messageArea.innerHTML = msg;
//   }
//   displayHit(guess) {
//       let cell;
//       cell = document.getElementById(guess);
//       cell.setAttribute("class", "hit");
//   }
//   displayMiss(guess) {
//       let cell;
//       cell = document.getElementById(guess);
//       cell.setAttribute("class", "miss");
//   }
//   displaySunk(ship, guess){
//       let cell, score;
//       // cells = document.getElementById(ship.locations);
//       ship.locations.forEach( function(loc) {
//           cell = document.getElementById(loc);
//           cell.setAttribute('class', 'sunk');
//           cell.setAttribute('disabled', true);
//           score = document.getElementById(ship.name);
//           score.setAttribute('class', 'scoreSunk');
//           score.textContent = 'SUNK';
//       });
//   }
// }

// class Game {
//   constructor(board, gameUI) {
//       this._board = board;
//       this._gameUI = gameUI;
//       this.guesses = 0;
//   }
//   processGuess(guess) {
//       let hit, ship, s, sunk, sunkenShips;
//       if (guess) {
//           this.guesses++;
//           hit = this._board.fire(guess);
//           if (hit && this._board.ships.length === 0) {
//               this._gameUI.displayMessage("You sank all my battleships, in " + this.guesses + " guesses");
//           }

//       }
//   }
// }

// class Board {
//   constructor(width, height, gameUI) {
//       let x, y, cells, cell;
//       // height and width can be changed to make a custom game, but must maintain state throughout game
//       this._width = width;
//       this._height = height;
//       this.grid = new Array(this._width);
//       this.numShips = 5;
//       this._gameUI = new GameUI(this);
//       this.shipsSunk = [];
//       this.ships = [{
//           name: "Aircraft Carrier",
//           size: 5,
//               locations: [],
//               hits: ["", "", "", "", ""]
//       }, {
//           name: "Battleship",
//           size: 4,
//               locations: [],
//               hits: ["", "", "", ""]
//       }, {
//           name: "Submarine",
//           size: 3,
//           locations: [],
//           hits: ["", "", ""]
//       }, {
//           name: "Destroyer",
//           size: 3,
//           locations: [],
//           hits: ["", "", ""]
//       }, {
//           name: "Patrol Boat",
//           size: 2,
//           locations: [],
//           hits: ["", ""]

//       }];
//       cells = document.getElementById('td');
//       for (x = 0; x < this._width; x++) {
//           this.grid[x] = new Array(height);
//           for (y = 0; y < this._height; y++) {
//               this.grid[x][y] = {
//                   name: x + "" + y
//               };
//           }
//       }
//   }
//   generateShipLocations() {
//       let ship, locations;
//       for (var i = 0; i < this.ships.length; i++) {
//           ship = this.ships[i];
//           locations = this.generateShip(ship);
//           while(this.collision(locations)){
//               locations = this.generateShip(ship);
//           }
//           ship.locations = locations;
//       }
//   }
//   generateShip(ship) {
//       let direction, row, col, newShipLocations, s;
//       direction = Math.floor(Math.random() * 2);

//       if (direction === 1) {
//           // horizontal ship
//           row = Math.floor(Math.random() * this._width);
//           col = Math.floor(Math.random() * (this._width - 5));
//       } else {
//           // vertical ship
//           row = Math.floor(Math.random() * (this._height - 5));
//           col = Math.floor(Math.random() * this._height);
//       }

//       newShipLocations = [];

//       // loop through ship's size to add locations
//       for(s = 0; s < ship.size; s++){
//           if (direction === 1) {
//               newShipLocations.push(row + '' + (col + s));
//           } else {
//               newShipLocations.push((row + s) + '' + col);
//           }
//       }
//       return newShipLocations;
//   }
//   collision(newShipLocations) {
//       let i, ship, j;
//       for (i = 0; i < this.ships.length; i++) {
//           ship = this.ships[i];

//           for (j = 0; j < newShipLocations.length; j++) {
//               if (ship.locations.indexOf(newShipLocations[j]) >= 0) {
//                   return true;
//               }
//           }
//       }
//       return false;
//   }
//   fire(guess) {
//       let i, ship, index, wasHit;

//       for (i = 0; i < this.ships.length; i++) {
//           ship = this.ships[i];
//           wasHit = ship.locations.includes(guess);
//           index = ship.locations.indexOf(guess);
//           if (wasHit === true) {
//               // We have a hit!
//               ship.hits[index] = "hit";
//               // console.log(ship.hits[index]);
//               this._gameUI.displayHit(guess);
//               this._gameUI.displayMessage(ship.name + " HIT!")
//               if (this.isSunk(ship)) {
//                   this.ships.splice(this.ships.indexOf(ship), 1);
//               }
//               return true;
//           }
//       }
//       this._gameUI.displayMiss(guess);
//       this._gameUI.displayMessage("You missed.");
//       return false;
//   }
//   isSunk(ship) {
//       let i, sunkenShip;
//       // takes a ship and looks at it's locations for a hit
//       for (i = 0; i < ship.hits.length; i++) {
//           if (ship.hits.includes("")) {
//               // if there's a location without a hit, the ship is afloat
//               return false;
//           }
//           this._gameUI.displayMessage("You sank my " + ship.name);
//           this.shipsSunk.push(ship);
//           this._gameUI.displaySunk(ship)
//               // otherwise the ship is sunk
//           return true;
//       }
//   }
// }

// let gameBoard = new Board(10, 10, gameUI);
// let gameUI = new GameUI(gameBoard);

// function init() {
//   let cells, cell, c;
//   cells = document.querySelectorAll("td.gameBoard");
//   for (c = 0; c < cells.length; c++) {
//       cell = cells[c];
//       cell.addEventListener("click", handleFiringClick);
//   }
// }

// window.onload = init;

// function handleFiringClick(e) {
//   let guess;
//   guess = e.target.id;
//   game.processGuess(guess);

// if (gameUI.displayHit) {
//   this.removeEventListener('click', handleFiringClick);
// }
// }

// gameUI.drawBoard();
// gameUI.drawScoreBoard();
// gameBoard.generateShipLocations();
// let game = new Game(gameBoard, gameUI);
