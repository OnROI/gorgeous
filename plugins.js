module.exports = [
    require('./plugins/css-variables/root'),
    require('./plugins/css-variables/backgroundColor'),
    require('./plugins/css-variables/backgroundGradient'),
    require('./plugins/css-variables/borderColor'),
    require('./plugins/css-variables/placeholderColor'),
    require('./plugins/css-variables/textColor'),

    require('./plugins/variants/dark'),

    require('./plugins/app'),
    require('./plugins/background'),
    require('./plugins/scroll'),
    require('./plugins/global'),

    require('./plugins/colors/primary'),
    require('./plugins/colors/form')
];