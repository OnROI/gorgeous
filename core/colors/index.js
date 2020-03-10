const generatePalette = require('../../util/generatePalette');
const generateAlphasForColors = require('../../util/generateAlphasForColors');

module.exports = generateAlphasForColors({
    transparent: 'transparent',
    black: '#000000',
    white: '#ffffff',
    primary: generatePalette('#5850ec'),
    secondary: generatePalette('#4b5563'),
    gray: generatePalette('#4b5563'),
    'cool-gray': generatePalette('#475569'),
    red: generatePalette('#e02424'),
    orange: generatePalette('#d03801'),
    yellow: generatePalette('#9f580a'),
    green: generatePalette('#057a55'),
    teal: generatePalette('#047481'),
    blue: generatePalette('#1c64f2'),
    indigo: generatePalette('#5850ec'),
    purple: generatePalette('#7e3af2'),
    pink: generatePalette('#d61f69'),
});