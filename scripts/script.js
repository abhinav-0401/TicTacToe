// The game as of now does't need to support multiple players.
// Identifiers with a captial(upper case) 'P' at the end denote a private variable.

// GameBoard object stores the, well, game board.
const GameBoard = (() => {

    //This is the 2d matrix
    let gameSpaceP = [
        ["X", "O", "X"],
        ["X", "X", "X"],
        ["X", "X", "X"]
    ];

    // The displayController module - handles creating, rendering the game board
    const displayController  = (() => {

        const boardDivP = document.querySelector(".board");

        // Create cells and pass them in to the div.board element
        const createBoardGrid = () => {
            for (let row = 0; row < 3; ++row) {
                const newRow = document.createElement("div");
                newRow.className = "row";
                newRow.id = `row-${row}`;
    
                for (let col = 0; col < 3; ++col) {
                    const newCol = document.createElement("div");
                    newCol.className = "col";
                    newCol.id = `col-${row}${col}`;
                    newRow.appendChild(newCol);
                }
                
                boardDivP.appendChild(newRow);
            }
        }
        
        // Grab the cells of the game board and pass gameSpaceP's innerHTML to them
        const renderBoard = () => {
            for (let row = 0; row < 3; ++row) {
                for (let col = 0; col < 3; ++col) {
                    const cell = document.getElementById(`col-${row}${col}`);
                    cell.innerHTML = gameSpaceP[row][col];
                }
            }
        };

        return {
            createBoardGrid,
            renderBoard
        };

    })();

    // gameplay module for initialising the board
    const gamePlay = (() => {

        const gameStateP = {
            keepPlaying : true,
            currentRound : 0
        };

        // Initialises the board with placeholder values, and adds event listeners to the cells for click event
        const initialiseBoard = () => {
            for (let row = 0; row < 3; ++row) {
                for (let col = 0; col < 3; ++col) {
                    gameSpaceP[row][col] = "[  ]";

                    const cell = document.getElementById(`col-${row}${col}`);

                    // Adding event listeners to each cell
                    cell.addEventListener("click", () => {
                        console.log(`Cell-${row}${col} clicked`);
                        clickSpot = {
                            row,
                            col
                        };

                        // Call playRoundP() when a cell is clicked, along with the round number of the game
                        playRoundP(gameStateP.currentRound, clickSpot);
                    });
                }
            }

            displayController.renderBoard();
        };

        // Determines the choice - X or O dpending upon the current round
        const choiceSelectionP = (roundNum) => {
            if (roundNum %  2 !== 0) {
                return "X";
            } else {
                return "O";
            }
        };

        // Modifies the gameSpaceP matrix and calls renderBoard()
        const playRoundP = (roundNum, playerSpot) => {
            let choice = choiceSelectionP(roundNum);
            
            gameSpaceP[playerSpot.row][playerSpot.col] = choice;
            gameStateP.currentRound += 1;

            displayController.renderBoard();
        };

        return {
            initialiseBoard
        };

    })();

    console.log(gameSpaceP[0][1]);   // test
    console.log(gameSpaceP[0][0]);   // test

    return {
        displayController,
        gamePlay
    };

})();

GameBoard.displayController.createBoardGrid();
GameBoard.gamePlay.initialiseBoard();
//GameBoard.displayController.renderBoard();

