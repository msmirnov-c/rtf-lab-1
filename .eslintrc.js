module.exports = {
    extends: 'eslint-config-airbnb-base',
    rules: {
        indent: ['error', 4],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: ['if', 'for', 'while', 'switch'], next: '*' },
        ],
        camelcase: ['error'],
        'linebreak-style': 'off',
        'no-plusplus': ['off'],
        'no-console': ['error'],
        'arrow-parens': ['error', 'as-needed']
    }
};
