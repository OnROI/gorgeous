module.exports = ({addComponents, config}) => {
    const varModules = {
        colors: 'color'
    };
    let rootArray = {};
    Object.keys(varModules).forEach(key => {
        if ((key === 'colors' && varModules['colors']) || (key === 'screens' && varModules['screens'] !== false) || varModules[key]) {
            const keyValue = config(`theme.${key}`, []);
            const names = Object.keys(keyValue);
            const modulePrefix = varModules[key];

            names.forEach(name => {
                let varName, value;
                if (key === 'colors' && isObject(keyValue[name])) {
                    colorObj = keyValue[name];
                    Object.keys(colorObj).forEach(key => {
                        varName = `--${modulePrefix !== '' ? modulePrefix : ''}-${name}-${key}`.replace(/-default$/, '');
                        value = typeof keyValue[name][key] === 'string' ? keyValue[name][key] : keyValue[name][key].toString();
                        rootArray[varName] = value;
                    });

                } else if (key === 'screens' && isObject(keyValue[name])) {
                    const minWEntries = Object.entries(keyValue[name]).filter(e => e[0] === 'min')

                    minWEntries.forEach(([_, screenValue]) => {
                        varName = `-${modulePrefix !== '' ? modulePrefix : ''}${name !== 'default' ? '-' + name.replace('/', '-') : ''}`;
                        rootArray[varName] = screenValue.toString();
                    })
                } else {
                    varName = `-${key !== 'screens' ? '-' : ''}${modulePrefix !== '' ? modulePrefix : ''}${
                        name !== 'default' ? '-' + name.replace('/', '-') : ''
                    }`;
                    value = typeof keyValue[name] === 'string' ? keyValue[name] : keyValue[name].toString();
                    rootArray[varName] = value;
                }


            });
        }
    });
    let root = {
        ':root': rootArray
    };
    addComponents(root);
};

var isObject = (obj) => {
    return Object.prototype.toString.call(obj) === '[object Object]';
};
