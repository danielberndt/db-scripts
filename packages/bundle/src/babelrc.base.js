module.exports = ({pure, withModules}) => ({
  presets: [
    "@babel/preset-react",
    ...(pure
      ? []
      : [
          [
            "@babel/env",
            {
              modules: withModules,
              loose: true,
              targets: {
                browsers: [">0.2%", "not dead", "not op_mini all"],
              },
            },
          ],
        ]),
  ],
  plugins: [
    [
      "transform-react-remove-prop-types",
      {
        mode: "unsafe-wrap",
        ignoreFilenames: ["node_modules"],
      },
    ],
    ["@babel/proposal-class-properties", {loose: true}],
    "@babel/transform-runtime",
    "minify-dead-code-elimination",
  ],
});
