/*
 * MIT Licensed
 * https://github.com/tailwindcss/tailwindcss/blob/master/src/util/flattenColorPalette.js
 */

const _ = require('lodash');

module.exports = function flattenColorPalette(colors) {
    return _(colors)
        .flatMap((color, name) => {
            if (!_.isObject(color)) {
                return [[name, color]]
            }

            return _.map(color, (value, key) => {
                const suffix = (key === 'default') ? '' : `-${key}`;
                return [`${name}${suffix}`, value]
            })
        })
        .fromPairs()
        .value();
};
