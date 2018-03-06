var expect = require('expect.js');

function mix(s1, s2) {
	const alpha = 'abcdefghijklmnopqrstuvwxyz';
	const count = (s, nr) => s.split('').filter((c) => alpha.indexOf(c) !== -1).sort().filter((c, pos, arr) => arr.indexOf(c) === pos).map((c) => s.match(new RegExp(c, "g")).join('')).filter((m) => m.length > 1).map((m) => { return [{ 'number': nr, 's': m, 'count': m.length }] });
	const startMix = count(s1, 1).concat(count(s2, 2));
	if (startMix.length === 0) return "";
	const res = startMix
		.sort((a, b) => a[0].s[0] === b[0].s[0] ? b[0].count - a[0].count : +(a[0].s[0] > b[0].s[0]) || +(a[0].s[0] === b[0].s[0]) - 1)
		.reduce((p, c) => {
			const pi = p.length - 1;
			const ci = c.length - 1;
			if (p[pi].s[0] === c[ci].s[0])
				if (p[pi].count > c[ci].count)
					return p;
				else if (p[pi].count === c[ci].count) {
					let ps = p;
					ps.splice(-1);
					return ps.concat({ 'number': 3, 's': c[ci].s, 'count': c[ci].count });
				}
			return p.concat(c);
		})
		.sort((a, b) => {
			// First sort by length
			if (a.count < b.count)
				return 1;
			else if (a.count > b.count)
				return -1;

			if (a.number > b.number)
				return 1;
			else if (a.number < b.number)
				return -1;

			// Lastly sort alphabetically on the string
			if (a.s[0] > b.s[0])
				return 1;
			else if (a.s[0] < b.s[0])
				return -1;
			else return 0;
		}).map((v) => v.number === 3 ? `=:${v.s}` : `${v.number}:${v.s}`).join('/');
	return res;
}


expect(mix("looping is fun but dangerous", "less dangerous than coding")).to.be("1:ooo/1:uuu/2:sss/=:nnn/1:ii/2:aa/2:dd/2:ee/=:gg");
expect(mix("Are they here", "yes, they are here")).to.be("2:eeeee/2:yy/=:hh/=:rr");
expect(mix(" In many languages", " there's a pair of functions")).to.be("1:aaa/1:nnn/1:gg/2:ee/2:ff/2:ii/2:oo/2:rr/2:ss/2:tt");
expect(mix("Lords of the Fallen", "gamekult")).to.be("1:ee/1:ll/1:oo");
expect(mix("codewars", "codewars")).to.be("");
expect(mix("A generation must confront the looming ", "codewarrs")).to.be("1:nnnnn/1:ooooo/1:tttt/1:eee/1:gg/1:ii/1:mm/=:rr");