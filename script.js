const newGame = (function() {
    let playerOne = {};
    let playerTwo = {};
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

    const checkWin = () => {
        Object.keys(gameBoard).filter((e) => {
            return e.indexOf('a') == 0;
        }).reduce((keysA, e) => {
            keysA[e] = gameBoard[e];
            console.log(keysA);
        }, {});
    };
    const startRound = () => {
        let randomTurn = Math.floor(Math.random() * 2);
        if (randomTurn == 1) {
            playerOne.turn = 5;
            // X is first
            playerTwo.turn = 4;
            // O
            //alert(`Player One is X! Player one goes first!`)
        } else {
            playerOne.turn = 4;
            // O
            playerTwo.turn = 5;
            // X
            //alert(`Player Two is X! Player two goes first!`)
        }
       /* for (let i in gameBoard) {
                if (gameBoard[i] == '') {
                    let turnX = prompt(`Player One: Enter the board position you wish to play: (example: B1) `);
                    gameBoard[turnX] = 'X';
                    alert(`X placed in ${ JSON.stringify(gameBoard) }!`);
                }
                if (gameBoard[i] == '') {
                    let turnO = prompt(`Player Two: Enter the board position you wish to play: (example: B1) `);
                    gameBoard[turnO] = 'O';
                    alert(`O placed: Game Board: ${ JSON.stringify(gameBoard) }!`);
                }
            }*/
    }
    return { playerOne, playerTwo, gameBoard, startRound, checkWin}
})();

newGame.checkWin()