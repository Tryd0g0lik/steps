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
  "overrides": [
    {
      "files": ['*.js', '*.jsx', '*.ts', '*.tsx'],
      "extends": 'standard-with-typescript'
    }
  ],
  "plugins": ["@typescript-eslint"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
  }
}
