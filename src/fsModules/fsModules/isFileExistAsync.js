const fs = require("node:fs");





function isFileExistAsync(filePath = "") {
  return new Promise((resolve) => {
    fs.readFile(filePath, (err) => {
      err ? resolve(false) : resolve(true);
    })
  })
}


module.exports =  isFileExistAsync;