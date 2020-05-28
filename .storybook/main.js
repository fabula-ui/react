const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
  // webpackFinal: async config => {
  //   config.resolve.alias = {
  //     '@fabula/core': path.resolve(__dirname, '..', '..', '..', 'core'),
  //     '@fabula/react': path.resolve(__dirname, '..', '..', '..', 'libs/fabula-react/dist'),
  //     '@fabula/react-dev': path.resolve(__dirname, '..', '..', '..', 'libs/fabula-react/src/lib'),
  //     'react': path.resolve(__dirname, '..', 'node_modules/react')
  //   }

  //   return config;
  // }
};
