const fs = require("node:fs");





function isFileExistAsync(dir = "" ,filePath = "") {
  console.log(dir ,"-", filePath);
  
  if (dir === "" || filePath === "") throw new Error("can't be empty");
  
  
  return new Promise((resolve) => {
    fs.readdir(dir, (err,files_subDires) => {
      if (err) {
        resolve(-1);
      }
      resolve(files_subDires.indexOf(filePath) != -1 )
    })
  })
}


module.exports =  isFileExistAsync;