module.exports = function ({addVariant, e}) {
    addVariant('dark', ({container, separator}) => {
        container.walkRules(rule => {
            rule.selector = `
            .dark .dark\\${separator}${rule.selector.slice(1)}, 
            .dark.dark\\${separator}${rule.selector.slice(1)}, 
            .dark .active\\${separator}dark\\${separator}${rule.selector.slice(1)}:active,
            .dark .focus\\${separator}dark\\${separator}${rule.selector.slice(1)}:focus,
            .dark .hover\\${separator}dark\\${separator}${rule.selector.slice(1)}:hover
            `;
        })
    })
};