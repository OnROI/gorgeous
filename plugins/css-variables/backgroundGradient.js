const _ = require('lodash');
const flattenColorPalette = require('../../util/flattenColorPalette');

module.exports = function ({addUtilities, e, theme, variants}) {
    const colors = flattenColorPalette(theme('backgroundColor'), false);

    const gradientLight = _.fromPairs(
        _.map(colors, (value, modifier) => {
            if (theme('colors.' + modifier + '.100')) {
                return [
                    `.${e(`bg-gradient-${modifier}-light`)}`,
                    {
                        backgroundImage: `linear-gradient(to bottom, var(--color-white) 0%, var(--color-${modifier}-100) 90%)`,
                    },
                ]
            }
            return []
        })
    );

    const gradientDark = _.fromPairs(
        _.map(colors, (value, modifier) => {
            if (theme('colors.' + modifier + '.500')) {
                return [
                    `.${e(`bg-gradient-${modifier}-dark`)}`,
                    {
                        backgroundImage: `linear-gradient(to bottom, var(--color-${modifier}-400) 0%, var(--color-${modifier}-600) 90%)`,
                    },
                ]
            }
            return []
        })
    );

    const utilities = _.omitBy(
        Object.assign({}, gradientLight, gradientDark),
        _.isNil
    );

    addUtilities(utilities, variants('backgroundColor'))
};
