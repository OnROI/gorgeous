const generatePalette = require('../../util/generatePalette');
const generateAlphasForColors = require('../../util/generateAlphasForColors');

module.exports = generateAlphasForColors({
    transparent: 'transparent',
    black: '#000000',
    white: '#ffffff',
    primary: generatePalette('#5850ec', '#222224', '#fff', '#111'),
    secondary: generatePalette('#4b5563', '#222224', '#fff', '#111'),
    gray: generatePalette('#4b5563', '#222224', '#fff', '#111'),
    'cool-gray': generatePalette('#475569', '#222224', '#fff', '#111'),
    red: generatePalette('#e02424', '#222224', '#fff', '#111'),
    orange: generatePalette('#d03801', '#222224', '#fff', '#111'),
    yellow: generatePalette('#9f580a', '#222224', '#fff', '#111'),
    green: generatePalette('#057a55', '#222224', '#fff', '#111'),
    teal: generatePalette('#047481', '#222224', '#fff', '#111'),
    blue: generatePalette('#1c64f2', '#222224', '#fff', '#111'),
    indigo: generatePalette('#5850ec', '#222224', '#fff', '#111'),
    purple: generatePalette('#7e3af2', '#222224', '#fff', '#111'),
    pink: generatePalette('#d61f69', '#222224', '#fff', '#111'),
});