const tsc = require("typescript");

module.exports = {
  process(src, path) {
    return path.endsWith(".ts") ? tsc.transpile(src, {}, path, []) : src;
  }
};