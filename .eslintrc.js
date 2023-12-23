module.exports = {
  "root": true,
  // "extends": "./tsconfig.json", // https://typescript-eslint.io/linting/typed-linting/monorepos
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true
  },
  "plugins": [
    "@stylistic",
    "@stylistic/js",
    "eslint-plugin-react",
    "@typescript-eslint",
    "react"
  ],
  "extends": [
    'eslint:recommended', // https://typescript-eslint.io/linting/configs#eslint-recommended
    "plugin:react/recommended",
    "standard-with-typescript",
    // "react-app",
    "airbnb-typescript",
    "react-app/jest",
    "plugin:@typescript-eslint/recommended", // https://typescript-eslint.io/linting/typed-linting/monorepos#one-tsconfigjson-per-package-and-an-optional-one-in-the-root
    "plugin:@typescript-eslint/recommended-type-checked", // https://typescript-eslint.io/linting/configs#recommended-type-checked
    "plugin:@typescript-eslint/strict",  // https://typescript-eslint.io/linting/configs#strict
    "plugin:@typescript-eslint/stylistic"  // https://typescript-eslint.io/linting/configs#stylistic
  ],
  "overrides": [
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": { // https://typescript-eslint.io/linting/typed-linting/monorepos#one-tsconfigjson-per-package-and-an-optional-one-in-the-root
    "project": true,
    // "project": ['./tsconfig.eslint.json', './packages/*/tsconfig.json'],
    "tsconfigRootDir": __dirname,
    "ecmaVersion": "latest",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },

  // "include": [
  //   "src"
  // ],

  "rules": {
    "quotes": "off",
    '@stylistic/js/indent': ['error', 2],
    "@typescript-eslint/quotes": ["error", "double"],
    "@stylistic/js/no-mixed-spaces-and-tabs": "error",
    "@stylistic/indent": ["error", 2],
    "@typescript-eslint/no-non-null-assertion": "error"
  }
}
