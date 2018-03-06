"use strict";
var expect = require('expect.js');
// Triangular Number: "any of the series of numbers (1, 3, 6, 10, 15, etc.) obtained by continued summation of the natural numbers 1, 2, 3, 4, 5, etc."
function sumTriangularNumbers(n) {
    if (n < 0)
        return 0;
    var numbers = [];
    var nextTri = function () {
        var sum = 0;
        var x = 0;
        while (sum <= numbers.slice(-1)[0]) {
            x++;
            sum += x;
        }
        return sum;
    };
    for (var i = 0; i < n + 1; i++)
        numbers.push(nextTri());
    return numbers.reduce(function (p, c) { return p + c; }, 0);
}
exports.sumTriangularNumbers = sumTriangularNumbers;
expect(sumTriangularNumbers(6)).to.be(56);
expect(sumTriangularNumbers(34)).to.be(7140);
expect(sumTriangularNumbers(-291)).to.be(0);
expect(sumTriangularNumbers(943)).to.be(140205240);
expect(sumTriangularNumbers(-971)).to.be(0);
