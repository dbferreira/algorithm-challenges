var chai = require('chai');
var expect = chai.expect;

// You have two sequences A and B consisting of integers, both of length N, and you would like them to be (strictly) increasing, i.e. for each K (0 ≤ K < N − 1), A[K] < A[K + 1] and B[K] < B[K + 1]. Thus, you need to modify the sequences, but the only manipulation you can perform is to swap an arbitrary element in sequence A with the corresponding element in sequence B. That is, both elements to be exchanged must occupy the same index position within each sequence.

// For example, given A = [5, 3, 7, 7, 10] and B = [1, 6, 6, 9, 9], you can swap elements at positions 1 and 3, obtaining A = [5, 6, 7, 9, 10], B = [1, 3, 6, 7, 9].

// Your goal is make both sequences increasing, using the smallest number of moves.

// Write a function:

// function solution(A, B);

// that, given two zero-indexed arrays A, B of length N, containing integers, returns the minimum number of swapping operations required to make the given arrays increasing. If it is impossible to achieve the goal, return −1.

// For example, given:

// A[0] = 5        B[0] = 1
// A[1] = 3        B[1] = 6
// A[2] = 7        B[2] = 6
// A[3] = 7        B[3] = 9
// A[4] = 10       B[4] = 9
// your function should return 2, as explained above.

// Given:

// A[0] = 5        B[0] = 2
// A[1] = -3       B[1] = 6
// A[2] = 6        B[2] = -5
// A[3] = 4        B[3] = 1
// A[4] = 8        B[4] = 0
// your function should return −1, since you cannot perform operations that would make the sequences become increasing.

// Given:

// A[0] = 1        B[0] = -2
// A[1] = 5        B[1] = 0
// A[2] = 6        B[2] = 2
// your function should return 0, since the sequences are already increasing.

// Assume that:

// N is an integer within the range [2..100,000];
// each element of arrays A, B is an integer within the range [−1,000,000,000..1,000,000,000];
// A and B have equal lengths.
// Complexity:

// expected worst-case time complexity is O(N);
// expected worst-case space complexity is O(N), beyond input storage (not counting the storage required for input arguments).

function isIncreasing(A) {
    for (let i = 0; i < A.length; i++) {
        if (A[i] >= A[i + 1]) return false;
    }
    return true;
}

const shouldSwap = (A, B, i) => {
    // both are smaller than their next values, do not swap
    if ((A[i] < A[i + 1]) && (B[i] < B[i + 1])) return false;
    // swapping would create non-increasing, no not swap
    if ((A[i + 1] <= B[i]) || (B[i + 1] <= A[i])) return false;
    return true;
}

function solution(A, B) {
    const arrayLength = A.length;
    let opCount = 0;
    let i = arrayLength - 1;
    while (i >= 0) {
        if (isIncreasing(A) && isIncreasing(B)) return opCount;
        if (shouldSwap(A, B, i)) {
            console.log('A, B:', A, B, opCount, i);        
            const temp = A[i];
            A[i] = B[i];
            B[i] = temp;
            opCount++;
        }
        if (isIncreasing(A) && isIncreasing(B)) return opCount;
        i--;
    }
    return -1;
}

// expect(solution([1,5,6], [-2, 0, 2])).to.equal(0);
// expect(solution([5, -3, 6, 4, 8], [2, 6, -5, 1, 0])).to.equal(-1);
expect(solution([5, 3, 7, 7, 10], [1, 6, 6, 9, 9])).to.equal(2);
// expect(solution([1, 7, 8, 9, 5], [6, 2, 3, 4, 10])).to.equal(3);