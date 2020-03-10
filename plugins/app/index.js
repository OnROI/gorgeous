module.exports = function ({addUtilities}) {
    const utilities = {
        '@supports (-webkit-overflow-scrolling: touch)': {
            '.h-available': {
                height: '-webkit-fill-available',
            },
        },

        '.pt-safe': {
            paddingTop: 'env(safe-area-inset-top, 0.75rem)',
        },

        '.pb-safe': {
            paddingBottom: 'env(safe-area-inset-bottom, 0.75rem)',
        },

        '.pl-safe': {
            paddingLeft: 'env(safe-area-inset-left, 0.75rem)',
        },

        '.pr-safe': {
            paddingRight: 'env(safe-area-inset-right, 0.75rem)',
        },

        '.tap-highlight-transparent': {
            webkitTapHighlightColor: 'transparent',
        },

        '.touch-callout-none': {
            webkitTouchCallout: 'none',
        },

        '.color-adjust-exact': {
            colorAdjust: 'exact',
        }
    };

    addUtilities(utilities)
};
