module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    "jest/globals": true,
    "cypress/globals": true,
  },
  extends: [
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:cypress/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "jest", "cypress"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {},
};
