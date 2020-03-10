const generatePalette = require('../../../util/generatePalette');

module.exports = {
    transparent: 'transparent',
    black: '#ffffff',
    white: '#000000',
    primary: generatePalette('rgb(10, 132, 255)', '#222224', '#fff', '#111'),
    secondary: generatePalette('rgb(152, 152, 157)', '#222224', '#fff', '#111'),
    gray: generatePalette('rgb(152, 152, 157)', '#222224', '#fff', '#111'),
    red: generatePalette('rgb(255, 69, 58)', '#222224', '#fff', '#111'),
    orange: generatePalette('rgb(255, 159, 10)', '#222224', '#fff', '#111'),
    yellow: generatePalette('rgb(255, 214, 10)', '#222224', '#fff', '#111'),
    green: generatePalette('rgb(50, 215, 75)', '#222224', '#fff', '#111'),
    teal: generatePalette('rgb(100, 210, 255)', '#222224', '#fff', '#111'),
    blue: generatePalette('rgb(10, 132, 255)', '#222224', '#fff', '#111'),
    indigo: generatePalette('rgb(94, 92, 230)', '#222224', '#fff', '#111'),
    purple: generatePalette('rgb(191, 90, 242)', '#222224', '#fff', '#111'),
    pink: generatePalette('rgb(255, 55, 95)', '#222224', '#fff', '#111'),
};
