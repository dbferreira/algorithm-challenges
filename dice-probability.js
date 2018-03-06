var chai = require('chai');
var expect = chai.expect;

function rolldiceSumProb(arr, totalSides) {
    if (arr > totalSides * 6) return 0;
    const totalPermutations = Math.pow(6, totalSides);
    const dice = [1, 2, 3, 4, 5, 6];
    const arrays = [];
    for (let i = 0; i < totalSides; i++) { arrays.push(dice); }
    let combinationCount = 0;
    let combos = [];

    const countCombinations = (arr, total, count) => {
        if (arr.length === 0) return [[], count];
        else if (arr.length === 1) return [arr[0], count];
        else {
            const accRes = [];
            const [rest, newCount] = countCombinations(arr.slice(1), total, count);  // recur with the rest of array
            for (let c in rest) {
                for (let i = 0; i < arr[0].length; i++) {
                    if ((arr[0][i] + rest[c]) == total)
                        count++;
                    accRes.push(arr[0][i] + rest[c]);
                }
            }
            return [accRes, count];
        }
    }

    [combos, combinationCount] = countCombinations(arrays, arr, 0);
    return combinationCount / totalPermutations;
}

expect(rolldiceSumProb(11, 2)).to.be.closeTo(0.0555555, 0.0001);
expect(rolldiceSumProb(22, 3)).to.be.closeTo(0, 0.0001);
expect(rolldiceSumProb(8, 2)).to.be.closeTo(0.13888888, 0.0001);
expect(rolldiceSumProb(8, 3)).to.be.closeTo(0.09722222, 0.0001);