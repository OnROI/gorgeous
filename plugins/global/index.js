module.exports = function ({addUtilities}) {
    const utilities = {
        '*, ::before, ::after': {
            borderColor: 'var(--color-gray-100)',
        },

        'html': {
            overflowX: 'hidden',
            overflowY: 'scroll',
        },

        'img:not([class])': {
            maxWidth: '100%',
            height: 'auto',
        },
    };

    addUtilities(utilities)
};
