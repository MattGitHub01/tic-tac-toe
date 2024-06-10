const newGame = (function() {
    let playerOne = { turn: true, turns: 5, currentTurn: false, moves: []};
    let playerTwo = { turn: false, turns: 4, currentTurn: false, moves: []};

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

    const startRound = function() {
        let counter = 9;
        while (counter >= 0 && playerOneWin == false && playerTwoWin == false) {
            if (playerOne.turn == true && playerOneWin == false) {
                if (counter <= 0) {
                    console.log(`TIE!`);
                    console.table(`${JSON.stringify(gameBoard)}`);
                    return
                }
                playerOne.turn = false;
                playerTwo.turn = true;
                let turnX = prompt(`Player One: Enter the board position you wish to play: (example: B1) `);
                if (gameBoard[turnX] == '') {
                    gameBoard[turnX] = 'X';
                    playerOne.moves.push(turnX);
                    console.log(turnX + ' ' + gameBoard[turnX]);
                    counter--;
                    checkWin()
                    if (playerOneWin == true) {
                        console.log(`Player One Wins!`)
                        counter = 0;
                        break
                    }
                } else {
                    alert(`Already taken!`);
                    playerOne.turn = true;
                    playerTwo.turn = false;
                }   
            }
            if (playerTwo.turn == true && playerTwoWin == false) {
                if (counter <= 0) {
                    console.log(`TIE!`);
                    console.table(`${JSON.stringify(gameBoard)}`);
                    return
                }
                playerOne.turn = true;
                playerTwo.turn = false;
                let turnO = prompt(`Player Two: Enter the board position you wish to play: (example: B1) `);
                if (gameBoard[turnO] == '') {
                    gameBoard[turnO] = 'O';
                    console.log(turnO + ' ' + gameBoard[turnO]);
                    playerTwo.moves.push(turnO);
                    counter--;
                    checkWin()
                    if (playerTwoWin == true) {
                        counter = 0;
                        console.log(`Player Two Wins!`);
                        break
                    }
                } else {
                    alert(`Already taken!`);
                    playerOne.turn = false;
                    playerTwo.turn = true;
                }
            }
        }
    }


    return { playerOne, playerTwo, gameBoard, startRound}
})();
const container = document.querySelector('.container');
const button = document.querySelector('.button');
button.textContent = 'Play Tic-Tac-Toe!';
button.addEventListener('click' , () => {
    newGame.startRound()
})

        /*function checkWin() {
            const checkVal = ['a', 'b', 'c', 1, 2, 3];
            checkVal.forEach((pos) => {
                let arrKeys = (element) => {
                    element = pos;
                    let check = Object.keys(gameBoard).filter((e) => {
                        return e.endsWith(element) == [] ? e.startsWith(element) : e.endsWith(element);
                    })
                    return check
                    // Generates an array of game board positions that start or end with an input
                }
                arrKeys()
                let currentVal = pos.value;
                let keyArr = arrKeys();
                for (let i in keyArr) {
                    return keyArr[i]
                }
            })
        }
        checkWin()
        */