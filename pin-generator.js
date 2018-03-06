let chai = require('chai'),
    expect = chai.expect;

/* I'm using chai to test the results.
 * 
 * To run the function, first install the npm dependencies:
 * `npm install`
 * 
 * Then start the tests with:
 * `node pin-generator.js`
 * 
 * The output should be blank if everything passes.
 */

// PIN GENERATION LOGIC
// --------------------

// Full disclosure: I had to look up the regex functions for these checks
const hasConsecutiveDuplicates = val => {
    return val.match(/(.)\1{1,}/);
}

const hasIncrementalNumbers = val => {
    return val.match(/012|123|234|345|456|567|678|789|890/);
}

// Calculates a single valid pin number, with a default length of 4
const getRandomPin = (pinLength = 4) => {
    let pin = '';
    const pinMultiplier = +('9'.repeat(pinLength));
    while (pin.length < pinLength) {
        pin = Math.floor(Math.random() * pinMultiplier).toString();

        if (hasConsecutiveDuplicates(pin)) pin = ''; // Prevent consecutive duplicate characters
        if (hasIncrementalNumbers(pin)) pin = ''; // Prevent incremental numbers
    }
    return pin;
}

// Produce a number of random pins (default amount of 1000)
const generatePins = (pinCount = 1000) => {
    const result = [];
    while (result.length < pinCount) {
        const newPin = getRandomPin();
        if (result.indexOf(newPin) !== -1) continue; // Prevent duplicate pins in the result set
        result.push(newPin);
    }
    return result;
}

// TEST HELPER FUNCTIONS
// ---------------------

// Produce a unique array and compare the length to the original
const hasDuplicates = arr => {
    const uniqueArray = [...(new Set(arr))];
    return arr.length !== uniqueArray.length;
}

// Check all pins for consecutive duplicate or incremental numbers
const allPinsValid = arr => {
    for (const value of arr) {
        if (hasConsecutiveDuplicates(value) || hasIncrementalNumbers(value))
            return false;
    };
    return true;
}

const randomPins = generatePins();

// Test the results:
expect(randomPins).to.have.lengthOf(1000, 'Pins should have a length of 1000'); // Has 1000 pins in result set
expect(hasDuplicates(randomPins), 'Duplicate pins detected').to.be.false; // Check for duplicate pins in result set
expect(allPinsValid(randomPins), 'Pin validation failed').to.be.true; // Validate pins for consecutive and incremental numbers

console.log('All tests passed');
