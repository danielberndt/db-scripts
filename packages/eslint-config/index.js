module.exports = {
  extends: [require.resolve("eslint-config-react-app")],
  rules: {
    "import/no-duplicates": "warn",
    "import/no-unresolved": "error",
    "import/namespace": "error",
    "import/no-extraneous-dependencies": "error",
    "no-shadow": "warn",
  },
};
