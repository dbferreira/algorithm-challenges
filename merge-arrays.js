let chai = require('chai'),
    expect = chai.expect;

/* I'm using chai to test the results.
 * 
 * To run the function, first install the npm dependencies:
 * `npm install`
 * 
 * Then start the tests with:
 * `node merge-arrays.js`
 * 
 * The output should be blank if everything passes.
 */

// This solves the problem as required "in a linear fashion"
// and also handles the cases where elements further down in the
// second array could be smaller than a current element in the first array.
// (see additional test cases)
const mergeArrays = (a, b) => {
    const mergedArray = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            // Check if Element A is smaller than B
            if (a[i] && a[i] <= b[j]) {
                mergedArray.push(a[i]);
                a[i] = 0;

                // Do not break if this is the last element in array A
                if (i !== a.length - 1) break;
            }

            // Element A was not smaller than B
            if (b[j]) {
                mergedArray.push(b[j]);
                b[j] = 0;
            }
        }
        // Also add last remaining element in array A
        if (a[i]) {
            mergedArray.push(a[i]);
            a[i] = 0;
        }
    }
    return mergedArray;
}

// This gets to the same results by making use of build-in-functions, but does not follow the instructions
const mergeArraysBIF = (a, b) => {
    return a.concat(b).sort();
}

// Test the results:
expect(mergeArrays([1, 1, 3, 5], [1, 2, 3, 4])).to.deep.equal([1, 1, 1, 2, 3, 3, 4, 5]);
expect(mergeArrays([2, 3, 4, 5, 6], [1, 2, 3, 4, 5])).to.deep.equal([1, 2, 2, 3, 3, 4, 4, 5, 5, 6]);
expect(mergeArrays([1, 2, 5, 5, 7], [2, 5, 7, 7, 9])).to.deep.equal([1, 2, 2, 5, 5, 5, 7, 7, 7, 9]);

expect(mergeArraysBIF([1, 1, 3, 5], [1, 2, 3, 4])).to.deep.equal([1, 1, 1, 2, 3, 3, 4, 5]);
expect(mergeArraysBIF([2, 3, 4, 5, 6], [1, 2, 3, 4, 5])).to.deep.equal([1, 2, 2, 3, 3, 4, 4, 5, 5, 6]);
expect(mergeArraysBIF([1, 2, 5, 5, 7], [2, 5, 7, 7, 9])).to.deep.equal([1, 2, 2, 5, 5, 5, 7, 7, 7, 9]);

console.log('All tests passed');
