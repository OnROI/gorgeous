const _ = require('lodash');

module.exports = function prefixKeys(object, prefix = '--') {
    return _.mapKeys(object, function (value, key) {
        return '--color-' + key;
    })
};