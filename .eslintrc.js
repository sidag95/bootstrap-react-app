const path = require("path")

module.exports = {
  parser: "pluggable-babel-eslint",
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  parserOptions: {
    plugins: ["typescript"],
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "jsx-a11y"],
  overrides: [
    {
      files: ["**/*.js", "**/*.tsx", "**/*.jsx", "**/*.ts"],
      rules: {
        "react/prop-types": "off"
      }
    },
    {
      files: ["**/__tests__/**"],
      settings: {
        "import/resolver": {
          jest: {
            jestConfigFile: path.join(__dirname, "./jest.config.js")
          }
        }
      }
    }
  ]
}
