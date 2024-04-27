// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:sonarjs/recommended"
  ],

  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "sonarjs/cognitive-complexity": ["error", 100]
  },
  plugins: ["prettier", "sonarjs"]
};
