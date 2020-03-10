let file = require('../../core/colors');
const plugin = require('tailwindcss/plugin');

const generateAlphasForColors = require('../../util/generateAlphasForColors');
const prefixKeys = require('../../util/prefixKeys');
const flattenColorPalette = require('../../util/flattenColorPalette');

module.exports = plugin.withOptions(function (options = {name: 'default', colors: {}, dark: false}) {
    return function ({addUtilities, theme}) {
        let themeName = options.name;
        let colors = options.colors;
        let colorScheme = options.dark ? 'dark' : 'light';

        colors = generateAlphasForColors(colors);
        colors = flattenColorPalette(colors);
        colors = prefixKeys(colors, '--color-');

        let remapUtilities = {};
        if (options.dark === true) {
            remapUtilities = {
                '@media (min-width: 640px)': {
                    '.sm\\:border-gray-200': {
                        borderColor: 'var(--color-gray-300)',
                    },
                },
                '.border-gray-200': {
                  borderColor: 'var(--color-gray-300)',
                },
                '*, ::before, ::after': {
                    borderColor: 'var(--color-gray-300)',
                },
                '.form-input': {
                    borderColor: 'var(--color-gray-300)',
                },
                '.form-textarea': {
                    borderColor: 'var(--color-gray-300)',
                },
                '.form-select': {
                    borderColor: 'var(--color-gray-300)',
                },
            };

            colors['--color-white'] = colors['--color-gray-200'];
        }

        const preference = {
            [`@media (prefers-color-scheme: ${colorScheme})`]: {
                [`.prefers-color-scheme-dark`]: {
                    ':root': colors
                }
            },
        };

        const utilities = {
            [`.theme-${themeName}`]: {
                ...colors,
                ...remapUtilities,
            },
            ...preference,
        };

        addUtilities(utilities)
    };
});