/*
    'off' or 0 - turn the rule off
    'warn' or 1 - turn the rule on as a warning (doesn’t affect exit code)
    'error' or 2 - turn the rule on as an error (exit code will be 1)
*/

module.exports = {
    // https://github.com/airbnb/javascript
    // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
    extends: 'airbnb-base',

    env: {
        browser: true,
        node: true,
        es6: true
    },

    parserOptions: {
        sourceType: 'module'
    },

    rules: {
        'import/extensions': 0,
        'import/prefer-default-export': 0,

        indent: [ 2, 4 ], // 4 spaces
        'space-in-parens': [ 2, 'always' ],
        'template-curly-spacing': ['error', 'always' ],
        'no-console': 'off',
        'keyword-spacing': [ 2, { 
            overrides: {
                if: { after: false },
                for: { after: false },
                while: { after: false }
            }
        } ],
        'operator-linebreak': [ 2, 'after' ],
        'arrow-parens': [ 2, 'as-needed' ],
        'computed-property-spacing': [ 2, 'always' ],
        'no-trailing-spaces': [ 2, { skipBlankLines: true } ],
        'array-bracket-spacing': [ 2, 'always', { singleValue: true, arraysInArrays: false } ],
        'eol-last': [ 2, 'never' ],
        'comma-dangle': [ 2, 'never' ],
        'no-param-reassign': [ 2, { props: false } ],
        'no-restricted-syntax': 0
    },
    globals: {
    }
};