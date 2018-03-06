var chai = require('chai');
var expect = chai.expect;

// WIP (NOT FINISHED)

function incrementString(s) {
    const matchRes = s.match(/\d+$/);
    console.log(matchRes);
    if (!matchRes) return s + 1;
    console.log('a:', matchRes[2]);

    const text = s.substring(0, matchRes[1]);
    console.log('text:', text);
    return s;
}

expect(incrementString("danie")).to.equal("danie1");
expect(incrementString("foobar000")).to.equal("foobar001");
expect(incrementString("foo")).to.equal("foo1");
expect(incrementString("foobar001")).to.equal("foobar002");
expect(incrementString("foobar99")).to.equal("foobar100");
expect(incrementString("foobar099")).to.equal("foobar100");
expect(incrementString("")).to.equal("1");
