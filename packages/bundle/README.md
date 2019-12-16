# @db-scripts/bundle

## Installation

```bash
npm i -D @db-scripts/bundle
```

## Usage

Add this to your `package.json`

```json
{
  "scripts": {
    "build": "db-scripts-bundle --size-snapshot",
  }
}
```

This will create an ES Module build, a commonjs build, a umd build and an esnext build within a `dist` folder.

It also will also add a `.size-snapshot.json` which will tell you the size of your library including all required dependencies.

Typically you want to add these fields to your `package.json`

```json
{
  "main": "dist/cjs/index.js",
  "module": "dist/es/index.js",
  "sideEffects": false,
  "files": [
    "dist"
  ],
}
```

Check out the docs for [sideEffects](https://webpack.js.org/guides/tree-shaking/#mark-the-file-as-side-effect-free) to make sure you understand what this field implies.


The bundling process uses plain babel for the esm and commonjs builds. You can find the reasoning [here](https://www.danielberndt.net/blog/2018/you-might-not-need-rollup-for-libraries).

## Thanks

The scripts are very heavily inspired by [kcd-scripts](https://github.com/kentcdodds/kcd-scripts). Thanks a lot for sharing your code Kent!

