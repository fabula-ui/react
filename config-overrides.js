const path = require('path');
const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
    addWebpackAlias({
        '@fabula/core': path.resolve(__dirname, '..', '..', 'core'),
        '@fabula/react': path.resolve(__dirname, '..', '..', 'libs/fabula-react/dist'),
        '@fabula/react-dev': path.resolve(__dirname, '..', '..', 'libs/fabula-react/src/lib'),
        'react': path.resolve(__dirname, 'node_modules/react')
    })
);