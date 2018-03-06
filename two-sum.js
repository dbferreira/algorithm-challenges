var chai = require('chai');
var expect = chai.expect;

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var a, b;
    for (var x = 0; x < nums.length; x++) {
        for (var y = x; y < nums.length; y++) {
            if (nums[x] + nums[y] == target) {
                a = x;
                b = y;
                break;
            }
        }
    }
    return [a, b];
};

console.time("a");
twoSum([2, 7, 11, 15], 9);
console.timeEnd("a");
expect(twoSum([3, 2, 4], 6)).to.deep.equal([1, 2]);
