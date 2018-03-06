var expect = require('expect.js');

// This validates the solution of a soduko board

function validSolution(board) {
    let validator = [];
    const getBlock = (x, y) => {
        if (x < 3 && y < 3) return 0;
        if (x < 6 && y < 3) return 1;
        if (x < 9 && y < 3) return 2;
        if (x < 3 && y < 6) return 3;
        if (x < 6 && y < 6) return 4;
        if (x < 9 && y < 6) return 5;
        if (x < 3 && y < 9) return 6;
        if (x < 6 && y < 9) return 7;
        if (x < 9 && y < 9) return 8;
    }
    for (var x = 0; x < board.length * 3; x++) {
        validator[x] = [];
    }
    for (var i = 0; i < board.length; i++) {
        let row = board[i];
        for (var j = 0; j < row.length; j++) {
            let elm = row[j];
            if (elm == 0) return false;
            if (validator[i].indexOf(elm) !== -1) return false;
            validator[i].push(elm);
            if (validator[j + board.length].indexOf(elm) !== -1) return false;
            validator[j + board.length].push(elm);
            if (validator[getBlock(i, j) + board.length * 2].indexOf(elm) !== -1) return false;
            validator[getBlock(i, j) + board.length * 2].push(elm);
        }
    }
    return true;
}

expect(validSolution([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 1, 5, 6, 4, 8, 9, 7],
    [3, 1, 2, 6, 4, 5, 9, 7, 8],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [5, 6, 4, 8, 9, 7, 2, 3, 1],
    [6, 4, 5, 9, 7, 8, 3, 1, 2],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [8, 9, 7, 2, 3, 1, 5, 6, 4],
    [9, 7, 8, 3, 1, 2, 6, 4, 5]])).to.be(false);


expect(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]])).to.be(true);

expect(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]])).to.be(false);

