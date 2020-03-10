# gorgeous

```
yarn add @onroi/gorgeous
```

```
module.exports = {
  theme: {
    colors: {
      ...require('@onroi/gorgeous/core/colors')
    },
    extend: {}
  },
  variants: {},
  corePlugins: {
    ...require('@onroi/gorgeous/core/plugins')
  },
  plugins: [
    ...require('@onroi/gorgeous/plugins'),

    require('@onroi/gorgeous/plugins/theme')({
      name: 'dark',
      colors: require('@onroi/gorgeous/core/colors/dark'),
      dark: true
    }),
  ]
}
```
