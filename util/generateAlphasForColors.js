const _ = require('lodash');
const hexToRgba = require('hex-to-rgba');

module.exports = function generateAlphasForColors(colors) {
    let alphas = {};
    _.forEach(colors, function (value, key) {
        let colorName = key;
        if (colorName.includes('-alpha')) {
            return;
        }

        if (key === 'black' || key === 'white') {
            alphas[colorName + '-alpha'] = {
                50: hexToRgba(value, 0.05),
                100: hexToRgba(value, 0.10),
                200: hexToRgba(value, 0.20),
                300: hexToRgba(value, 0.30),
                400: hexToRgba(value, 0.40),
                500: hexToRgba(value, 0.50),
                600: hexToRgba(value, 0.60),
                700: hexToRgba(value, 0.70),
                800: hexToRgba(value, 0.80),
                900: hexToRgba(value, 0.90),
            }
        }

        _.forEach(value, function (value, key) {
            if (key === '600') {
                alphas[colorName + '-alpha'] = {
                    50: hexToRgba(value, 0.05),
                    100: hexToRgba(value, 0.10),
                    200: hexToRgba(value, 0.20),
                    300: hexToRgba(value, 0.30),
                    400: hexToRgba(value, 0.40),
                    500: hexToRgba(value, 0.50),
                    600: hexToRgba(value, 0.60),
                    700: hexToRgba(value, 0.70),
                    800: hexToRgba(value, 0.80),
                    900: hexToRgba(value, 0.90),
                }
            }
        });
    });

    return _.merge(colors, alphas);
};