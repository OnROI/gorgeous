const generatePalette = require('../../../util/generatePalette');

module.exports = {
    transparent: 'transparent',
    black: '#000000',
    white: '#ffffff',
    primary: generatePalette('rgb(10, 132, 255)'),
    secondary: generatePalette('rgb(152, 152, 157)'),
    gray: generatePalette('rgb(152, 152, 157)'),
    red: generatePalette('rgb(255, 69, 58)'),
    orange: generatePalette('rgb(255, 159, 10)'),
    yellow: generatePalette('rgb(255, 214, 10)'),
    green: generatePalette('rgb(50, 215, 75)'),
    teal: generatePalette('rgb(100, 210, 255)'),
    blue: generatePalette('rgb(10, 132, 255)'),
    indigo: generatePalette('rgb(94, 92, 230)'),
    purple: generatePalette('rgb(191, 90, 242)'),
    pink: generatePalette('rgb(255, 55, 95)'),
};
