const _ = require('lodash');
const flattenColorPalette = require('../../util/flattenColorPalette');

module.exports = function ({addUtilities, e, theme, variants}) {
    const colors = flattenColorPalette(theme('borderColor'));

    const utilities = _.fromPairs(
        _.map(_.omit(colors, 'default'), (value, modifier) => {
            return [
                `.${e(`border-${modifier}`)}`,
                {
                    'border-color': `var(--color-${modifier})`,
                },
            ]
        })
    );

    addUtilities(utilities, variants('borderColor'))
};
