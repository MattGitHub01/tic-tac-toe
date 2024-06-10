const newGame = (function() {
    let playerOne = { goFirst: true, currentTurn: false};
    let playerTwo = { goFirst: false, currentTurn: false};
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
    const startRound = () => {
        function checkWin() {
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
    }
       /* let randomTurn = Math.floor(Math.random() * 2);
        randomTurn == 1 ?
            (playerOne.turn = true,alert(`Player One goes first!`)):
            (playerTwo.turn = true,alert(`Player Two goes first!`));
            // Randomizes the first player
        for (let i in gameBoard) {
            // For-in loop uses the number of spaces in game board to determine number of player turns
                if (gameBoard[i] == '') {
                    let turnX = prompt(`Player One: Enter the board position you wish to play: (example: B1) `);
                    if (gameBoard[turnX] == '') {
                        gameBoard[turnX] = 'X';
                    } else {
                        alert(`${JSON.stringify(gameBoard)} already taken!`);
                    }
                if (gameBoard[i] == '') {
                    let turnO = prompt(`Player Two: Enter the board position you wish to play: (example: B1) `);
                    if (gameBoard[turnO] == '') {
                        gameBoard[turnO] = 'O';
                    } else {
                        alert(`${JSON.stringify(gameBoard)} already taken!`);
                    }
                }
            }
        }
    }*/
    return { playerOne, playerTwo, gameBoard, startRound}
})();

newGame.startRound()