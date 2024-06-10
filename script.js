const newGame = (function() {
    let playerOne = { turn: true, turns: 5, currentTurn: false, moves: ['a1', 'a2', 'a3']};
    let playerTwo = { turn: false, turns: 4, currentTurn: false, moves: []};

    let gameBoard = {
        a1: '',
        a2: '',
        a3: '',
        b1: '',
        b2: '',
        b3: '',
        c1: '',
        c2: '', 
        c3: ''
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
    /*const checkWin = function(player) {
        player.moves(keys).winCombos.some( (check) => {
            player.moves.includes(check);
        });
        if (check == true) {
            console.log(`${player} wins!`)
        }
    }*/

    let checkWin = function() {
        let winner = false;
        for (let i in winCombos) {
            const winRow = winCombos[i];
            let placeOne = gameBoard[winRow[0]];
            let placeTwo = gameBoard[winRow[1]];
            let placeThree = gameBoard[winRow[2]];

            if (placeOne == '' || placeTwo == '' || placeThree == '') {
                continue;
            }
            if (placeOne == placeTwo && placeTwo == placeThree) {
                winner = true;
                break;
            }
        }
        return winner
    }


    let counter = 9;
    const turn = function() {
        if (counter > 0) 
            if (playerOne.turn == true) {
                playerOne.turn = false;
                playerTwo.turn = true;
                console.log(checkWin())
                let turnX = prompt(`Player One: Enter the board position you wish to play: (example: B1) `);
                if (gameBoard[turnX] == '') {
                    gameBoard[turnX] = 'X';
                    playerOne.moves.push(turnX);
                    counter--;
                } else {
                    alert(`Already taken!`);
                    playerOne.turn = true;
                    playerTwo.turn = false;
                }
            
        }
        if (counter > 0) {
            if (playerTwo.turn == true) {
                playerOne.turn = true;
                playerTwo.turn = false;
                console.log(checkWin())
                let turnO = prompt(`Player Two: Enter the board position you wish to play: (example: B1) `);
                if (gameBoard[turnO] == '') {
                    gameBoard[turnO] = 'O';
                    playerTwo.moves.push(turnO);
                    counter--;
                } else {
                    alert(`Already taken!`);
                    playerOne.turn = false;
                    playerTwo.turn = true;
                }
            }
        }
    }

const startRound = function() {
        while (counter > 0) {
            turn()
        }
    }
    return { playerOne, playerTwo, gameBoard, startRound}
})();

newGame.startRound()

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