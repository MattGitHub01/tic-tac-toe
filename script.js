const newGame = (function() {

    let playerOne = { turn: '', gamePiece: 'X' };
    let playerTwo = { turn: '', gamePiece: 'O' };

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
    let randomTurn = Math.floor(Math.random() * 2);
    if (randomTurn == 1) {
        playerOne.turn = 5;
        // X is first
        playerTwo.turn = 4;
        // O
        alert(`Player One  X! Player one goes first!`)
    } else {
        playerOne.turn = 4;
        // O
        playerTwo.turn = 5;
        // X
    }
    let turnMove = prompt(`Enter the board position you wish to play: `);
})();

