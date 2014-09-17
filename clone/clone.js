var isObject = require('../is-object');
var isArray = require('../is-array');
var extend = require('../extend');


module.exports = function clone(obj) {
    if (!isObject(obj)) return obj;
    return isArray(obj) ? obj.slice() : extend({}, obj);
};
