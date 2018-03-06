var chai = require('chai');
var expect = chai.expect;


function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const sorted = A.sort().filter(e => e > 0);
    let smallest = 1;
    for (let i = 1; i <= 100000;  i++) {
        if (sorted.includes(i)) continue;
        smallest = i;
        break;
    }

    return smallest;
}

expect(solution([1, 3, 6, 4, 1, 2])).to.equal(5);
expect(solution([1, 2, 3])).to.equal(4);
expect(solution([-1, -3])).to.equal(1);
