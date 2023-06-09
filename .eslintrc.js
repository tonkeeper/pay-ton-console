module.exports = {
    root: true,
    ignorePatterns: ['node_modules', 'dist'],
    extends: ['plugin:prettier/recommended', 'prettier'],
    rules: {
        'no-underscore-dangle': 'off',
        'no-plusplus': 'off',
        'class-method-use-this': 'off',
        eqeqeq: ['error', 'smart'],
        complexity: 'error',
        'no-empty': ['error'],
        'no-restricted-globals': 'error',
        'no-param-reassign': 'off',
        'no-prototype-builtins': 'off',

        'array-bracket-spacing': ['error', 'never'],
        'object-curly-spacing': ['error', 'always'],
        indent: 'off',
        'max-classes-per-file': 'error',
        radix: ['error', 'as-needed'],
        'no-return-assign': 'off',
        'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
        'no-console': [
            'warn',
            {
                allow: ['debug', 'error', 'info']
            }
        ]
    },
    overrides: [
        {
            files: ['src/**/*.ts', 'src/**/*.tsx'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint', 'import', 'unused-imports', 'solid'],
            extends: ['airbnb-typescript/base', 'plugin:solid/typescript'],
            parserOptions: {
                sourceType: 'module',
                project: './tsconfig.json',
                ecmaVersion: 2020,
                ecmaFeatures: {
                    jsx: true
                }
            },
            rules: {
                '@typescript-eslint/indent': 'off',
                'import/extensions': 'off',
                '@typescript-eslint/no-use-before-define': 'off',
                'import/prefer-default-export': 'off',
                '@typescript-eslint/no-useless-constructor': 'off',
                '@typescript-eslint/explicit-function-return-type': [
                    'error',
                    {
                        allowExpressions: true,
                        allowConciseArrowFunctionExpressionsStartingWithVoid: true
                    }
                ],
                'no-plusplus': 'off',
                'class-method-use-this': 'off',
                'no-underscore-dangle': 'off',
                'no-inferrable-types': 'off',
                '@typescript-eslint/no-explicit-any': 2,
                '@typescript-eslint/no-unused-vars': 'off',
                'unused-imports/no-unused-imports': 'error',
                'unused-imports/no-unused-vars': [
                    'error',
                    {
                        vars: 'all',
                        args: 'all',
                        ignoreRestSiblings: false,
                        argsIgnorePattern: '^_'
                    }
                ],
                '@typescript-eslint/no-inferrable-types': 'off',
                'class-methods-use-this': 'off',
                complexity: ['error', 21],
                eqeqeq: ['error', 'smart'],
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        selector: 'enumMember',
                        format: ['UPPER_CASE']
                    }
                ],
                'solid/components-return-once': 'error',
                'no-empty': ['error', { allowEmptyCatch: true }],
                // Styling.
                'array-bracket-spacing': ['error', 'never'],
                'object-curly-spacing': ['error', 'always'],
                indent: 'off',
                'comma-dangle': 'off',
                '@typescript-eslint/comma-dangle': ['error', 'never'],
                'import/no-extraneous-dependencies': 'off',
                '@typescript-eslint/dot-notation': 'off',
                'no-restricted-globals': 'off',
                '@typescript-eslint/no-empty-function': 'off',
                'no-param-reassign': 'off',
                'max-classes-per-file': 'off',
                radix: ['warn', 'as-needed'],
                'no-prototype-builtins': 'off',
                'no-return-assign': 'off',
                'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
                'no-console': [
                    'warn',
                    {
                        allow: ['debug', 'error', 'info']
                    }
                ],
                'import/export': 0,
                '@typescript-eslint/no-shadow': 'off',
                '@typescript-eslint/return-await': 'off'
            }
        },
        {
            files: ['tests/**/*.ts'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: './packages/*/tsconfig.test.json',
                tsconfigRootDir: __dirname,
                createDefaultProgram: true
            },
            plugins: ['@typescript-eslint', 'unused-imports'],
            extends: ['airbnb-typescript/base', 'plugin:prettier/recommended', 'prettier'],
            rules: {
                'import/prefer-default-export': 'off',
                '@typescript-eslint/no-useless-constructor': 'off',
                'no-plusplus': 'off',
                'class-method-use-this': 'off',
                'no-underscore-dangle': 'off',
                'no-inferrable-types': 'off',
                '@typescript-eslint/no-explicit-any': 2,
                '@typescript-eslint/no-unused-vars': 'off',
                'unused-imports/no-unused-imports': 'error',
                'unused-imports/no-unused-vars': [
                    'error',
                    {
                        vars: 'all',
                        args: 'all',
                        ignoreRestSiblings: false,
                        argsIgnorePattern: '^_'
                    }
                ],
                '@typescript-eslint/no-inferrable-types': 'off',
                'class-methods-use-this': 'off',
                complexity: ['error', 20],
                eqeqeq: ['error', 'smart'],
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        selector: 'enumMember',
                        format: ['UPPER_CASE']
                    }
                ],
                'no-empty': ['error', { allowEmptyCatch: true }],
                // Styling.
                'array-bracket-spacing': ['error', 'never'],
                'object-curly-spacing': ['error', 'always'],
                indent: 'off',
                'comma-dangle': 'off',
                '@typescript-eslint/comma-dangle': ['error', 'never'],
                'import/no-extraneous-dependencies': 'off',
                '@typescript-eslint/dot-notation': 'off',
                'no-restricted-globals': 'off',
                '@typescript-eslint/no-empty-function': 'off',
                'no-param-reassign': 'off',
                'max-classes-per-file': 'off',
                radix: ['warn', 'as-needed'],
                'no-prototype-builtins': 'off',
                'no-return-assign': 'off',
                'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
                'no-console': 'off',
                'import/export': 0,
                '@typescript-eslint/no-shadow': 'off',
                '@typescript-eslint/return-await': 'off'
            }
        },
        {
            files: ['vite.config.ts'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                sourceType: 'module',
                ecmaVersion: 'latest',
                project: './tsconfig.vite.json'
            },
            rules: {
                '@typescript-eslint/indent': 'off'
            }
        }
    ]
};
