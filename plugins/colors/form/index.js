module.exports = function ({addUtilities}) {
    const utilities = {
        '.form-input': {
            backgroundColor: 'var(--color-white)',
            borderColor: 'var(--color-gray-200)',
            color: 'var(--color-black)',
            '&:focus': {
                boxShadow: '0 0 0 3px var(--color-primary-alpha-200)',
                borderColor: 'var(--color-primary-300)'
            }
        },
        '.form-textarea': {
            backgroundColor: 'var(--color-white)',
            borderColor: 'var(--color-gray-200)',
            color: 'var(--color-black)',
            '&:focus': {
                boxShadow: '0 0 0 3px var(--color-primary-alpha-200)',
                borderColor: 'var(--color-primary-300)'
            }
        },
        '.form-select': {
            backgroundColor: 'var(--color-white)',
            borderColor: 'var(--color-gray-200)',
            color: 'var(--color-black)',
            '&:focus': {
                boxShadow: '0 0 0 3px var(--color-primary-alpha-200)',
                borderColor: 'var(--color-primary-300)'
            }
        },
    };

    addUtilities(utilities)
};
