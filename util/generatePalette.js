const _ = require('lodash');
const chroma = require('chroma-js');

module.exports = function generatePalette(keyColor = 'blue', baseColor = '#fefefe', lightestColor = '#ffffff', darkestColor = '#000000', contrastRatioMap = {
    50: 1.08,
    100: 1.12,
    200: 1.2,
    300: 1.8,
    400: 3.7,
    500: 5.8,
    600: 7.2,
    700: 8.6,
    800: 10.6,
    900: 14.1,
    default: 5.2
}) {
    let scaledColors = chroma.scale([lightestColor, keyColor, darkestColor]).colors(1000);

    let mappedColors = {};
    let ratios = [];
    scaledColors.forEach(function (value) {
        let contrast = chroma.contrast(value, baseColor);
        mappedColors[contrast] = value;
        ratios.push(contrast);
    });

    let colors = {};
    _.forEach(contrastRatioMap, function (target, key) {
        let closestRatio = ratios.reduce(function (previous, current) {
            return (Math.abs(current - target) < Math.abs(previous - target) ? current : previous);
        });
        colors[key] = mappedColors[closestRatio];
    });

    return colors;
};
