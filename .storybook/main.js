const path = require('path');

const appSourceDir = path.join(__dirname, '..', 'src');

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
  webpackFinal: async config => {
    const svgRule = config.module.rules.find((rule) => 'test.svg'.match(rule.test));
    svgRule.exclude = [appSourceDir];

    config.module.rules.push({
      test: /\.svg$/i,
      include: [appSourceDir],
      use: [
        'svg-inline-loader'
      ]
    });

    // config.module.rules.push({
    //   test: /\.svg$/,
    //   loader: 'svg-inline-loader'
    // });
    // config.resolve.alias = {
    //   '@fabula/core': path.resolve(__dirname, '..', '..', '..', 'core'),
    //   '@fabula/react': path.resolve(__dirname, '..', '..', '..', 'libs/fabula-react/dist'),
    //   '@fabula/react-dev': path.resolve(__dirname, '..', '..', '..', 'libs/fabula-react/src/lib'),
    //   'react': path.resolve(__dirname, '..', 'node_modules/react')
    // }

    return config;
  }
};
