module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true
  },
  "extends": [
    'eslint:recommended',
    // "airbnb",
    // "airbnb-typescript",
    // "airbnb-typescript/base",
    // "plugin:react/recommended",
    // "standard-with-typescript",
    // "airbnb-base",

    // "react-app",
    // "airbnb-typescript",
    // "airbnb/hooks",
    // "react-app/jest"
    "plugin:@typescript-eslint/recommended-type-checked"

  ],
  "overrides": [
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": true,
    "tsconfigRootDir": __dirname,
    "ecmaVersion": "latest",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "eslint-plugin-react",
    "@typescript-eslint",
    "react"
  ],
  "root": true,
  "rules": {
  }
}
