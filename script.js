const newGame = (function() {
    let playerOne = { turn: '' };
    let playerTwo = { turn: '' };
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
        let randomTurn = Math.floor(Math.random() * 2);
        if (randomTurn == 1) {
            playerOne.turn = 5;
            // X is first
            playerTwo.turn = 4;
            // O
            alert(`Player One is X! Player one goes first!`)
        } else {
            playerOne.turn = 4;
            // O
            playerTwo.turn = 5;
            // X
            alert(`Player Two is X! Player one goes first!`)
        }
        while (playerOne.turn > 0 || playerTwo.turn > 0) {
            let turnX = prompt(`Player One: Enter the board position you wish to play: (example: B1) `);
            let boardX = turnX.value;
            gameBoard.boardX = 'X';
            playerOne.turn--;
            alert(`X placed in ${gameBoard.boardX}!   |   ${ {gameBoard} }!`);
            let turnO = prompt(`Player Two: Enter the board position you wish to play: (example: B1) `);
            let boardO = turnO.value;
            gameBoard.boardY = 'O';
            playerTwo.turn--;
            alert(`O placed in ${gameBoard.boardPos}!    |   ${ {gameBoard} }`);
            }
        }
    return { playerOne, playerTwo, startRound}
})();

newGame.startRound()