

module.exports = {

  "env": {
    "browser": true,
    "es2021": true,
    "jest": true
  },
  "extends": [
    "standard-with-typescript",
    "react-app",

    "react-app/jest"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": 18,
    "sourceType": 'module',

  },
  "plugins": [
    'react',
    '@typescript-eslint',


  ],
  "parser": '@typescript-eslint/parser',
  'overrides': [
    {
      "files": ['src/**/*.tsx', 'src/*.tsx'],


      "rules": {
    "multiline-comment-style": ["error", "bare-block"], // https://eslint.org/docs/latest/rules/multiline-comment-style#rule-details
        "symbol-description": "error",
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
