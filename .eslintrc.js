module.exports = {
  "root": true,
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


  ],
  "overrides": [
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": { // https://typescript-eslint.io/linting/typed-linting/monorepos#one-tsconfigjson-per-package-and-an-optional-one-in-the-root
    "project": true,

    "tsconfigRootDir": __dirname,
    "ecmaVersion": "latest",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },


  "rules": {
    "react/prop-types": 0,
    "quotes": "off",
    '@stylistic/js/indent': ['error', 2],
    "@typescript-eslint/quotes": ["error", "double"],
    "@stylistic/js/no-mixed-spaces-and-tabs": "error",
    "@stylistic/indent": ["error", 2],
    "@typescript-eslint/no-non-null-assertion": "error",

    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "always",
        "tsx": "always"
      }
    ],
    "import/no-unresolved": "off"
  }
}
