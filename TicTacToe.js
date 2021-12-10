const reader = require("readline-sync");

let player1 = reader.question("Insert your name ");
let player2 = reader.question("Insert your name ");

let board = [
    ['□', '□', '□'],
    ['□', '□', '□'],
    ['□', '□', '□']
];
function printResult(mat){
    let result = "";
    for (let i = 0; i <= board.length - 1; i++) {
        for (let j = 0; j <= 2; j++) {
            if(j === 2) {
                result+=mat[i].join('');
                result+='\n';
            }
        }
    }
    return result;
}



console.log(printResult(board));

for (let move = 1; move <= 9; move++) {
    if (move % 2 !== 0) {
        console.log(`It's ${player1}'s turn.`);
        let inputX = reader.question("Make a move.");
        let rowX = inputX.charAt(0);
        let columnX = inputX.charAt(1);
        Number.rowX;
        Number.columnX;
        board[rowX][columnX] = 'X'
        console.log(printResult(board));
        if ((board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') || (board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X') ||(board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X') || (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') || (board[0][2] === 'X' && board[1][1] === 'X'&& board[2][0] === 'X') || (board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') || (board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X') || (board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X')) {
            console.log(`${player1} is the winner.`);
            break;
        }
    }
    else {
        console.log(`It's ${player2}'s turn.`);
        let inputO = reader.question("Make a move.");
        let rowO = inputO.charAt(0);
        let columnO = inputO.charAt(1);
        Number.rowO;
        Number.columnO;
        board[rowO][columnO] = 'O'
        console.log(printResult(board));
        if ((board[0][0] === 'O' && board[0][1] === 'O' && board[0][2] === 'O') || (board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === 'O') ||(board[0][2] === 'O' && board[1][2] === 'O' && board[2][2] === 'O') || (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') || (board[0][2] === 'O' && board[1][1] === 'O'&& board[2][0] === 'O') || (board[0][0] === 'O' && board[0][1] === 'O' && board[0][2] === 'O') || (board[1][0] === 'O' && board[1][1] === 'O' && board[1][2] === 'O') || (board[2][0] === 'O' && board[2][1] === 'O' && board[2][2] === 'O')) {
            console.log(`${player2} is the winner.`);
            break;
        }
    }
    if (move === 9 && !(board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') || (board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X') ||(board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X') || (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') || (board[0][2] === 'X' && board[1][1] === 'X'&& board[2][0] === 'X') || (board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') || (board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X') || (board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X') && !(board[0][0] === 'O' && board[0][1] === 'O' && board[0][2] === 'O') || (board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === 'O') ||(board[0][2] === 'O' && board[1][2] === 'O' && board[2][2] === 'O') || (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') || (board[0][2] === 'O' && board[1][1] === 'O'&& board[2][0] === 'O') || (board[0][0] === 'O' && board[0][1] === 'O' && board[0][2] === 'O') || (board[1][0] === 'O' && board[1][1] === 'O' && board[1][2] === 'O') || (board[2][0] === 'O' && board[2][1] === 'O' && board[2][2] === 'O')) {
        console.log("Tie.");
    }
}




