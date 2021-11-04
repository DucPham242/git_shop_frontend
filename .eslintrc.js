module.exports = {
  env: {
      browser: true,
      es6: true,
  },
  extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
      ecmaFeatures: {
          experimentalObjectRestSpread: true,
          jsx: true,
      },
      ecmaVersion: 6,
      sourceType: 'module',
  },
  plugins: [
      'react',
      'react-hooks',
  ],
  rules: {
      'prefer-const': 'warn',
      'no-inner-declarations': 'warn',
      'no-trailing-spaces': 'warn',
      'no-unused-vars': 'warn',
      'no-multiple-empty-lines': 'warn',
      'arrow-body-style': 'warn',
      'padded-blocks': 'warn',
      'import/order': 'warn',
      'no-use-before-define': 0,
      'react/jsx-pascal-case': 0,
      radix: 0,
      'linebreak-style': 0,
      quotes: [
          'warn',
          'single',
      ],
      semi: [
          'warn',
          'always',
      ],
      'arrow-parens': ['warn', 'always'],
      'react/jsx-uses-vars': 'warn',
      'react/jsx-uses-react': 'warn',
      'jsx-a11y/href-no-hash': 0,
      'jsx-a11y/alt-text': 0,
      'no-empty': 0,
      'react/jsx-filename-extension': 0,
      indent: 0,
      'react/jsx-indent': 0,
      camelcase: 0,
      'react/prop-types': 0,
      'no-shadow': 0,
      'no-unused-expressions': 0,
      'react/jsx-indent-props': 0,
      'jsx-a11y/click-events-have-key-events': 0,
      'jsx-a11y/no-static-element-interactions': 0,
      'max-len': 0,
      'spaced-comment': 0,
      'react/sort-comp': 0,
      'class-methods-use-this': 0,
      'jsx-a11y/label-has-for': 0,
      'object-curly-newline': 0,
      'no-plusplus': 0,
      'react/jsx-one-expression-per-line': 0,
      'jsx-a11y/label-has-associated-control': 0,
      'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
      'react-hooks/exhaustive-deps': 0, // Checks effect dependencies
  },
  settings: {
      react: {
          createClass: 'createReactClass', // Regex for Component Factory to use, default to "createReactClass"
          pragma: 'React', // Pragma to use, default to "React"
          version: '17.0.1', // React version, default to the latest React stable release
      },
      propWrapperFunctions: ['forbidExtraProps'], // The names of any functions used to wrap the propTypes object, such as `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
  },
};
