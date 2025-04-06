const fs = require("node:fs");

const path = require("node:path");




function isFileExistAsync(filePath = "") {  
  return new Promise((resolve) => {
    if (filePath === "") resolve(false);

    const  fileDir = path.dirname(filePath);
    const fileName = path.basename(filePath);
    
    fs.readdir(fileDir, {withFileTypes:true},(err,files_subDires) => {
      if (err) {
        resolve(false)
      }
      if (!files_subDires){
        resolve(false);
        return;
      }
      files_subDires = files_subDires.filter(element => element.isFile())

  
      for (const file of files_subDires) {
          if (file.name === fileName) {
              resolve(true);
              return;
          }
      }
      resolve(false);
    })
  })
}


module.exports =  isFileExistAsync;