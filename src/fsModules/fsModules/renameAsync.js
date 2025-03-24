const fs = require("node:fs");

function renameAsync(filePath, newFilePath) {
  return new Promise((resolve) => {
    fs.rename(filePath, newFilePath, (err) => {
      if (err) {
        resolve(false);
      }
      resolve(true);
    });
  })
}


module.exports =  renameAsync;