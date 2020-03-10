module.exports = function ({addUtilities}) {
    const utilities = {
        '.scroll-snap-x': {
            scrollSnapStop: 'always',
            scrollSnapType: 'x mandatory',
            overflow: '-moz-scrollbars-none',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
        },

        '.scroll-snap-x::-webkit-scrollbar': {
            display: 'none',
        },

        '.scroll-snap-y': {
            scrollSnapStop: 'always',
            scrollSnapType: 'y mandatory',
            overflow: '-moz-scrollbars-none',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
        },

        '.scroll-snap-y::-webkit-scrollbar': {
            display: 'none',
        },

        '.scroll-auto': {
            scrollBehavior: 'auto',
        },

        '.scroll-smooth': {
            scrollBehavior: 'smooth',
        },

        '.overscroll-x-contain': {
            overscrollBehaviorX: 'contain',
        },

        '.overscroll-y-contain': {
            overscrollBehaviorY: 'contain',
        },

        '.overscroll-contain': {
            overscrollBehavior: 'contain',
        },

        '.scroll-snap-start': {
            scrollSnapAlign: 'start',
        },

        '.scroll-snap-end': {
            scrollSnapAlign: 'end',
        },
    };

    addUtilities(utilities)
};
