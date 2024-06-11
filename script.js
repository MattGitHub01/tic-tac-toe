const newGame = (function() {
    let playerOne = { turn: true, turns: 5, currentTurn: false, moves: []};
    let playerTwo = { turn: false, turns: 4, currentTurn: false, moves: []};
    // Player objects
    
    let gameBoard = {
        a1: ``,
        a2: ``,
        a3: ``,
        b1: ``,
        b2: ``,
        b3: ``,
        c1: ``,
        c2: ``, 
        c3: ``
    };
    // The tic-tac-toe grid as an object

    const winCombos = [
        [`a1`, `a2`, `a3`],
        [`b1`, `b2`, `b3`],
        [`c1`, `c2`, `c3`],
        [`a1`, `b1`, `c1`],
        [`a2`, `b2`, `c2`],
        [`a3`, `b3`, `c3`],
        [`a1`, `b2`, `c3`],
        [`c1`, `b2`, `a3`]
    ];
    // Array of winning game positions

    let playerOneWin = false;
    let playerTwoWin = false;
    let checkWin = function() {
        for (let i in winCombos) {
            const winRow = winCombos[i];
            let placeOne = gameBoard[winRow[0]];
            let placeTwo = gameBoard[winRow[1]];
            let placeThree = gameBoard[winRow[2]];

            if (placeOne == '' || placeTwo == '' || placeThree == '') {
                continue;
            }
            if (placeOne == placeTwo && placeTwo == placeThree && placeOne === 'X') {
                return playerOneWin = true;
            }
            if (placeOne == placeTwo && placeTwo == placeThree && placeOne === 'O') {
                return playerTwoWin = true;

            }
            // Each winning row should have 3 X's or 3 O's. So iterating through them then aligning each game board position to each winning array position, then checking if it has either an X or an O determines the winner
        }
    }

    let boardKeys = Object.keys(gameBoard);
    const userInterface = function() {
        const container = document.querySelector('.container');

        const displayArea = document.createElement('div');
        displayArea.classList.add('display-area');
        displayArea.textContent = 'Tic-Tac-Toe!';
        container.appendChild(displayArea);

        const gridContainer = document.createElement('div');
        gridContainer.classList.add('grid-container');
        container.appendChild(gridContainer);
        let divAmt = 9;
        let gmeBrdPos = 0;
        let turns = 9;
        while (divAmt > 0) {
            let gridPosition = boardKeys[gmeBrdPos];
            console.log(gridPosition);
            gmeBrdPos++;
            const gridDiv = document.createElement('div')
            gridDiv.classList.add('grid-div');
            gridDiv.addEventListener('click', () =>{
                if (playerOne.turn == true && gridDiv.textContent == '' && turns > 0 && playerOneWin == false) {
                    const gridDivText = document.createElement('span');
                    gridDivText.textContent = `X`;
                    gridDiv.appendChild(gridDivText)
                    playerOne.turn = false;
                    playerTwo.turn = true;
                    let turnX = gridPosition;
                    if (gameBoard[turnX] == '') {
                        gameBoard[turnX] = 'X';
                        playerOne.moves.push(turnX);
                        turns--
                    }
                    console.log(playerOne.moves);
                    checkWin()
                    console.log(playerOneWin);
                    if (playerOneWin == true) {
                        turns = 0;
                        displayArea.textContent = `Player One Wins!`;
                    }
                    if (playerTwoWin == true) {
                        turns = 0;
                        displayArea.textContent = `Player Two Wins!`;
                    }
                    if (turns <= 0 && playerOneWin == false) {
                        displayArea.textContent = `Tie!`;
                    }
                }
                if (playerTwo.turn == true && gridDiv.textContent == '' && turns > 0 && playerTwoWin == false) {
                    const gridDivText = document.createElement('span');
                    gridDivText.textContent = `O`;
                    gridDiv.appendChild(gridDivText)
                    playerOne.turn = true;
                    playerTwo.turn = false;
                    let turnO = gridPosition;
                    if (gameBoard[turnO] == '') {
                        gameBoard[turnO] = 'O';
                        playerTwo.moves.push(turnO);
                        turns--
                    }
                    console.log(playerTwo.moves);
                    checkWin()
                    console.log(playerTwoWin);
                    if (playerOneWin == true) {
                        turns = 0;
                        displayArea.textContent = `Player One Wins!`;
                    }
                    if (playerTwoWin == true) {
                        turns = 0;
                        displayArea.textContent = `Player Two Wins!`;
                    }
                    if (turns <= 0 && playerOneWin == false) {

                        displayArea.textContent = `Tie!`;
                    }
                } 
            });
            gridContainer.appendChild(gridDiv);
            divAmt--
        }
    }

    return { playerOne, playerTwo, gameBoard, userInterface}
})();

newGame.userInterface()