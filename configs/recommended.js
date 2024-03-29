'use strict';

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: {
      createClass: 'createReactClass', // Regex for Component Factory to use,
      pragma: 'React', // Pragma to use, default to "React"
      fragment: 'Fragment', // Fragment to use (may be a property of <pragma>), default to "Fragment"
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
    },
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react/no-children-prop': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/indent': ['error', 2, {
      "SwitchCase": 1
    }],
    '@typescript-eslint/no-unused-vars': ['error', {
      'vars': 'all',
      'args': 'after-used',
      'varsIgnorePattern': '^_',
      'argsIgnorePattern': '^_',
    }],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'comma',
        requireLast: true,
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false,
      },
      overrides: {
        interface: {
          multiline: {
            delimiter: 'semi',
            requireLast: true,
          },
        },
      },
      multilineDetection: 'brackets',
    }],
    '@typescript-eslint/ban-types': ['error', {
      'types': {
        '{}': false,
      },
      'extendDefaults': true,
    }],
    'quotes': ['error', 'single'],
    'quote-props': ['error', 'consistent', {
      keywords: true,
      unnecessary: false,
      numbers: true,
    }],
    'sort-imports': ['error', {
      ignoreCase: true,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      allowSeparatedGroups: false,
      memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none'],
    }],
    'no-async-promise-executor': 'off',
    'semi': [2, 'always'],
    'comma-dangle': ['error', {
      imports: 'never',
      exports: 'never',
      functions: 'always-multiline',
      objects: 'always-multiline',
      arrays: 'always-multiline',
    }],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],
    'object-shorthand': ['error', 'always'],
    'eqeqeq': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'space-before-blocks': ['error', 'always'],
    'block-spacing': ['error', 'always'],
    'keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        function: { 'after': false },
      },
    }],
    'space-infix-ops': ['error'],
    'no-multi-spaces': ['error'],
    'key-spacing': ['error', {
      afterColon: true,
      beforeColon: false,
      mode: 'strict',
    }],
    'indent': 'off',
    'eol-last': ['error', 'always'],
    'arrow-spacing': ['error', {
      before: true,
      after: true
    }],
    'newline-after-var': ['error', 'always'],
    'space-unary-ops': [2, {
      words: true,
      nonwords: true,
      overrides: {
        '!': false,
        '!!': false,
        '+': false,
        '-': false,
        '++': false,
        '--': false,
      },
    }],
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always',
    }],
    'no-var': 'error',
    'prefer-const': ['error', {
      destructuring: 'any',
      ignoreReadBeforeAssign: false,
    }],
  },
};
