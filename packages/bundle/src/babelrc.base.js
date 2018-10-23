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
                browsers: ["ie 10", "ios 7"],
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
    ["@babel/plugin-proposal-object-rest-spread", {loose: true}],
    ["@babel/proposal-class-properties", {loose: true}],
    "@babel/transform-runtime",
    "minify-dead-code-elimination",
  ],
});
