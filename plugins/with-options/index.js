const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({addUtilities, theme, variants}) {

}, {
    theme: {
        colors: {
            ...require('../../core/colors')
        },
        screens: {
            ...require('../../core/screens')
        },
        extend: {
            boxShadow: {
                ...require('../../exend/shadows')
            },
            fontSize: {
                ...require('../../exend/font-size')
            },
            lineHeight: {
                ...require('../../exend/line-height')
            }
        },
    },
    variants: {
        ...require('../../core/variants')
    },
});
