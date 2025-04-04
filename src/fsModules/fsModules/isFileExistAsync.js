const fs = require("node:fs");






function isFileExistAsync(dir = "" ,filePath = "") {  
  return new Promise((resolve) => {
    if (dir === "" || filePath === "") resolve(false);
    fs.readdir(dir, (err,files_subDires) => {
      if (err) {
        resolve(false)
      }
      resolve(files_subDires?.indexOf?.(filePath) != -1 )
    })
  })
}


module.exports =  isFileExistAsync;