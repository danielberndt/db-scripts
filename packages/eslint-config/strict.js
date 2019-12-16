module.exports = {
  extends: ["./index.js"],
  rules: {
    complexity: ["warn", 14],
    camelcase: ["warn", {properties: "always"}],
    "max-depth": ["warn", 4],
    "max-lines": ["warn", {max: 2500, skipBlankLines: false, skipComments: false}],
    "max-lines-per-function": ["warn", 150],
    "max-nested-callbacks": ["warn", 7],
    "max-params": ["warn", 7],
    "no-console": "warn",
    "import/no-cycle": "warn",
  },
};
