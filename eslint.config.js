

module.exports = {

  "env": {
    "browser": true,
    // "es6": true
    "es2021": true
  },

  "extends": [
    // "tsconfig.json",
    "standard-with-typescript",
    "react-app",
    // "eslint:recommended",
    // "plugin:react/recommended",
    "react-app/jest"

  ],
  "parserOptions": {
    // "requireConfigFile": false,

    "ecmaVersion": 2018,
    "sourceType": 'module',
    "ecmaFeatures": {
      // "globalReturn": true,
      "jsx": true
    },
    // "presets": ['@babel/preset-env', '@babel/preset-typescript'],
  },
  "plugins": [
    'react',
    // 'react/jsx-runtime',
    '@typescript-eslint',


  ],
  "parser": '@typescript-eslint/parser',
  // "extend": ['plugin:@typescript-eslint/recommended'],
  'overrides': [
    {

      "files": ['./src/**/*.tsx', './src/*.tsx'],



      "rules": {
        // "react/jsx-uses-react": "error",
        // "react/jsx-uses-vars": "error",

    "multiline-comment-style": ["error", "bare-block"], // https://eslint.org/docs/latest/rules/multiline-comment-style#rule-details
        "symbol-description": "error",
        // "symbol-description": ["error", "starred-block"],
    "require-await": "error", // https://eslint.org/docs/head/rules/require-await Запретить асинхронные функции, которые не имеют выражения ожидания
    "prefer-template": "error", //https://eslint.org/docs/head/rules/prefer-template#examples использования операторов + со строками.
    "no-lone-blocks": "error",

    "prefer-const": "error",
    "linebreak-style": [
      "error",
      "windows"
    ],
    "id-match": ["error", "^[a-z]+([A-Z][a-z]+)*$"],  // https://eslint.org/docs/head/rules/id-match#properties Id совпадения
    "eqeqeq": ["error", "always"] // https://eslint.org/docs/head/rules/eqeqeq#options кол-во символов  of === and !==
    // ...
      },
    }
  ],
  "ignorePatterns": ['.eslintignore'],
  // 'file': ['src']

}
