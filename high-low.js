var chai = require('chai');
var expect = chai.expect;


function highAndLow(numbers) {
    const high = numbers.split(' ').reduce((p, c) => +p > +c ? p : c, numbers.split(' ')[0]);
    const low = numbers.split(' ').reduce((p, c) => +c <= +p ? c : p, numbers.split(' ')[0]);
    return `${high} ${low}`;
}

expect(highAndLow("1 2 3 4 5")).to.equal('5 1');
expect(highAndLow("1 2 -3 4 5")).to.equal('5 -3');
expect(highAndLow("1 9 3 4 -5")).to.equal('9 -5');
expect(highAndLow("1 -1")).to.equal("1 -1");
expect(highAndLow("1 1")).to.equal("1 1");
expect(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")).to.equal("542 -214");
