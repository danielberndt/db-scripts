module.exports = {
  extends: [require.resolve("eslint-config-react-app")],
  globals: {
    __DEV__: true,
  },
  rules: {
    "import/no-duplicates": "warn",
    "import/no-unresolved": "error",
    "import/namespace": "error",
    "import/no-extraneous-dependencies": "error",
    "no-shadow": "warn",
    "no-unused-vars": [
      "warn",
      {
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_",
      },
    ],
  },
};
