/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier'],
    env: {
        browser: true,
        amd: true,
        node: true
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                semi: true,
                trailingComma: 'none',
                printWidth: 120,
                tabWidth: 4
            }
        ]
    },
    parserOptions: {
        ecmaVersion: 'latest'
    }
};
