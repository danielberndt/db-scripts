const fs = require("fs");
const path = require("path");
const readPkgUp = require("read-pkg-up");

const {pkg, path: pkgPath} = readPkgUp.sync({
  cwd: fs.realpathSync(process.cwd()),
});
const appDirectory = path.dirname(pkgPath);
const fromRoot = (...p) => path.join(appDirectory, ...p);

module.exports = {
  pkg,
  fromRoot,
};
