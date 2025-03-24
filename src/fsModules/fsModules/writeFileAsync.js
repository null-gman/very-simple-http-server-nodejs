const fs = require("node:fs");

function writeFileAsync(fileDir = "", content = "") {
  return new Promise((resolve) => {
    fs.writeFileSync(fileDir, content, function (err) {
      if (err) {
        resolve(false);
        return;
      }
      resolve(true);
    });
  });
}

module.exports = writeFileAsync;
