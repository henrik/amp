module.exports = function has(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
};
