module.exports = {
    parserOptions: {
        ecmaVersion: 7,
        ecmaFeatures: {
            impliedStrict: true,
            jsx: true,
            experimentalObjectRestSpread: true,
        },
        sourceType: 'module',
    },
    parser: 'babel-eslint',
    env: {
        node: true,
        es6: true,
    },
    extends: ['@react-native-community', 'airbnb'],
    rules: {
        // "no-undef": 2,
        'react-hooks/exhaustive-deps': 'off',
    },
    globals: { _: true, __DEV__: true, alert: true, fetch: true, fs: true },
};
