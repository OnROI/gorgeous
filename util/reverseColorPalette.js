const _ = require('lodash');
const swapKeys = require('./swapKeys');

module.exports = function reverseColorPalette(colors) {
    const colorMap = {
        50: 900,
        100: 800,
        200: 700,
        300: 600,
        400: 500,
        900: 50,
        800: 100,
        700: 200,
        600: 300,
        500: 400,
        'default': 'default',
    };

    let reversed = {};

    colors = swapKeys(colors, 'black', 'white');

    _.forEach(colors, function (value, key) {
        let color = _(value).mapKeys(function (v, k) {
            return colorMap[k];
        }).value();

        if (color['default']) {
            color['default'] = color[400];
        }

        reversed[key] = color;
    });

    return reversed;
};