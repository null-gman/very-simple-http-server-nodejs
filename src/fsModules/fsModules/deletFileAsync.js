const fs = require("node:fs");
const isFileExistAsync =  require("./isFileExistAsync.js");


async function deletFileAsync(fileDir = "") {
  if (!(await isFileExistAsync(fileDir))) {
    return false;
  }
  
  return new Promise((resolve) => {
    fs.unlink(fileDir, function (err) {
      if (err) {
        resolve(false);
        return;
      }
      resolve(true);
    });
  });
}

module.exports =  deletFileAsync;
