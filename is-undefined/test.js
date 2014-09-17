var test = require('tape');
var pack = require('./package.json');
var isUndefined = require('./' + pack.main);


test('amp-is-undefined', function (t) {
    t.ok(!isUndefined(1), 'numbers are defined');
    t.ok(!isUndefined(null), 'null is defined');
    t.ok(!isUndefined(false), 'false is defined');
    t.ok(!isUndefined(NaN), 'NaN is defined');
    t.ok(isUndefined(), 'nothing is undefined');
    t.ok(isUndefined(undefined), 'undefined is undefined');
    t.end();
});
