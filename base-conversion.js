var expect = require('expect.js');

var Alphabet = {
	BINARY: '01',
	OCTAL: '01234567',
	DECIMAL: '0123456789',
	HEXA_DECIMAL: '0123456789abcdef',
	ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
	ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
	ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

function convert(input, source, target) {
	if (source == target) return input;
	const range = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	let decimal = input.split('').reverse().reduce((pull, digit, x) => pull += source.indexOf(digit) * (Math.pow(source.length, x)), 0);
	let result = '';
	while (decimal > -1) {
		result = target[decimal % target.length] + result;
		decimal = (decimal - (decimal % target.length)) / target.length;
		if (decimal == 0) return result;
	}
	return result || '0';

}

expect(convert("15", Alphabet.DECIMAL, Alphabet.BINARY)).to.be("1111");
expect(convert("15", Alphabet.DECIMAL, Alphabet.OCTAL)).to.be("17");
expect(convert("1010", Alphabet.BINARY, Alphabet.DECIMAL)).to.be("10");
expect(convert("1010", Alphabet.BINARY, Alphabet.HEXA_DECIMAL)).to.be("a");

expect(convert("0", Alphabet.DECIMAL, Alphabet.ALPHA)).to.be("a");
expect(convert("27", Alphabet.DECIMAL, Alphabet.ALPHA_LOWER)).to.be("bb");
expect(convert("hello", Alphabet.ALPHA_LOWER, Alphabet.HEXA_DECIMAL)).to.be("320048");
expect(convert("SAME", Alphabet.ALPHA_UPPER, Alphabet.ALPHA_UPPER)).to.be("SAME");