module.exports = function ({addUtilities}) {
    const variants = ['active', 'hover', 'dark'];

    const newUtilities = {
        '.bg-image-none': {
            backgroundImage: 'none',
        },
        '.bg-100-100': {
            backgroundSize: '100% 100%',
        }
    };

    addUtilities(newUtilities, variants)
};