module.exports = {
  "root": "./",
  "extends": [
    "../../.eslintrc",
    "airbnb",
    "airbnb-typescript"
  ],
  "parserOptions": {

    "project": "./tsconfig.json",
    "tsconfigRootDir": __dirname,
    "ecmaVersion": "latest",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "ts": true
    }
  },
  "plugin": [
    "eslint-plugin-typescript",
  ],
  "rules": [
    "@typescript-eslint/strict-boolean-expression": "warn",
  ],
  "overrides": [
    {
      "plugins": [
        "@stylistic",
        "@stylistic/js",

        "eslint-plugin-react",
        "react"
      ],
      "extends": [
        "plugin:react/recommended",
        "react-app/jest",
        "plugin:@typescript-eslint/recommended", // https://typescript-eslint.io/linting/typed-linting/monorepos#one-tsconfigjson-per-package-and-an-optional-one-in-the-root
        "plugin:@typescript-eslint/recommended-type-checked", // https://typescript-eslint.io/linting/configs#recommended-type-checked
        "plugin:@typescript-eslint/strict",  // https://typescript-eslint.io/linting/configs#strict


      ],
      "rules": {
        // "@stylistic": "off",
        // "@stylistic/js": "off",
        // "eslint-plugin-react": "off",
        // "react": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-var-requires": "off",


      }
    }
  ]
}
