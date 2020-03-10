const _ = require('lodash');
const flattenColorPalette = require('../../util/flattenColorPalette');

module.exports = function ({addUtilities, e, theme, variants}) {
    const colors = flattenColorPalette(theme('placeholderColor'));

    const utilities = _.fromPairs(
        _.map(colors, (value, modifier) => {
            return [
                `.${e(`placeholder-${modifier}`)}::placeholder`,
                {
                    color: `var(--color-${modifier})`,
                },
            ]
        })
    );

    addUtilities(utilities, variants('placeholderColor'))
};
