const fs = require("node:fs");


function readDirAsync(fileDir = "") {
  return new Promise((resolve) => {
    fs.readdir(fileDir, (err, files) => {
      if (err) {
        resolve(false);
        return;
      }
      resolve(files);
    })
  })


}

module.exports = readDirAsync;