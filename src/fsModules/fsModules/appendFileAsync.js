const fs = require("node:fs");




/*do not use it as streaming method */
function appendFileAsync(fileDir = "", content = "") {
  return new Promise((resolve) => {
    fs.appendFile(fileDir, content, function (err) {
      if (err) {
        resolve(false);
        return;
      }
      resolve(true);
    });
  });
}

module.exports =  appendFileAsync;
