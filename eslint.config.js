/**
 * https://eslint.style/packages/ts
 *  '@stylistic/eslint-plugin-ts' - включает в себя правила как для JavaScript, так и для TypeScript
 */

module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "standard-with-typescript",
    "react-app",

    "react-app/jest"
  ],
  "plugins": [

    '@stylistic/ts',
    '@typescript-eslint',


  ],
  "parser": '@typescript-eslint/parser',
  "rules": {


    // '@typescript-eslint/indent': ['error', 2],
    // '@stylistic/ts/indent': ['error', 2],
    // 'no-tabs': ["error", { "allowIndentationTabs": true }], // символы табуляци https://eslint.style/rules/js/no-tabs#allowindentationtabs
    // '@indent': ["error", 2, { "ignoredNodes": ["ConditionalExpression"] }], // отступы вложенных блоков https://eslint.style/rules/js/indent#ignorednodes
    // // 'class-methods-use-this': 1,
    // "@stylistic/js/lines-between-class-members": ["error", "always"], // Улучшает читаемость между методами класса https://eslint.style/rules/js/lines-between-class-members#rule-details
    // '@stylistic/js/block-spacing': ["error", "never"],
    // "@stylistic/js/comma-spacing": ["error", { "before": false, "after": true }], // конечная запятая https://eslint.style/rules/js/comma-spacing#after

    // "@stylistic/js/lines-around-comment": ["error", { "beforeBlockComment": true, "beforeLineComment": true, }],// lines-around-comment
    // "@stylistic/plus/type-generic-spacing": ["error"], // интервал внутри https://eslint.style/rules/plus/type-generic-spacing#rule-details
    // "@stylistic/operator-linebreak": ["error", "after", { "overrides": { "?": "before", ":": "before" } }],// https://eslint.style/rules/default/operator-linebreak#overrides
    // "@stylistic/js/brace-style": ["error", "1tbs", { "allowSingleLine": true }], // скобка https://eslint.style/rules/js/brace-style#options
    // "@stylistic/js/function-call-spacing": ["error", "never"],//https://eslint.style/rules/js/function-call-spacing#options


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
  }

}
