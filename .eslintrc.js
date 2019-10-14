module.exports = {
    'env': {
        'commonjs': true,
        'es6': true,
        'node': true,
        'jest': true,
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 2018
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        camelcase: ['error'],
        'linebreak-style': 'off',
        'no-plusplus': ['off'],
        'no-console': ['error'],
        'arrow-parens': ['error', 'as-needed']
    }
};