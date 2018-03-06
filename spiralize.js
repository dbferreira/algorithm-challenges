var expect = require('expect.js');

var spiralize = function (size) {
    let direction = 'right';
    let canDraw = true;
    var matrix = [];
    for (var i = 0; i < size; i++) {
        matrix[i] = [];
        for (var j = 0; j < size; j++) {
            matrix[i][j] = 0;
        }
    }

    let row = 0;
    let col = -1;
    while (canDraw) {
        switch (direction) {
            case 'right':
                col++;
                break;
            case 'left':
                col--;
                break;
            case 'down':
                row++;
                break;
            case 'up':
                row--;
                break;
        }
        if (direction == 'right') {
            if (col + 1 < size && matrix[row][col + 1] == 1) {
                if (row + 2 < size && matrix[row + 2][col - 1] == 1) {
                    canDraw = false;
                    break;
                }
                else {
                    matrix[row][col] = 0;
                    col--;
                    direction = 'down';
                    continue;
                }
            }
            else if (col + 1 == size) {
                matrix[row][col] = 1;
                direction = 'down';
                continue;
            }
            else
                matrix[row][col] = 1;
        }
        if (direction == 'down') {
            if (row + 1 < size && matrix[row + 1][col] == 1) {
                if (col - 1 > 0 && matrix[row][col - 1] == 1) {
                    canDraw = false;
                    break;
                } else if (col - 1 > 0 && matrix[row - 2][col - 1] == 1) {
                    canDraw = false;
                    break;
                }
                else {
                    matrix[row][col] = 0;
                    direction = 'left';
                    row--;
                    continue;
                }
            }
            else if (row + 1 == size) {
                matrix[row][col] = 1;
                direction = 'left';
                continue;
            }
            else matrix[row][col] = 1;
        }

        if (direction == 'left') {
            if (col - 1 >= 0 && matrix[row][col - 1] == 1) {
                if (row - 1 > 0 && matrix[row - 1][col] == 1) {
                    canDraw = false;
                    break;
                }
                else {
                    matrix[row][col] = 0;
                    direction = 'up';
                    col++;
                    continue;
                }
            }
            else if (col - 1 < 0) {
                matrix[row][col] = 1;
                direction = 'up';
                continue;
            }
            else matrix[row][col] = 1;

        }

        if (direction == 'up') {
            if (row - 1 >= 0 && matrix[row - 1][col] == 1) {
                if (col + 1 < size && matrix[row][col + 1] == 1) {
                    canDraw = false;
                    break;
                }
                else {
                    matrix[row][col] = 0;
                    row++;
                    direction = 'right';
                    continue;
                }
            }
            else if (row - 1 < 0) {
                matrix[row][col] = 1;
                direction = 'right';
                continue;
            }
            else matrix[row][col] = 1;
        }

    }

    console.log(matrix);
    return matrix;
}

spiralize(5);
spiralize(10);
spiralize(25);
