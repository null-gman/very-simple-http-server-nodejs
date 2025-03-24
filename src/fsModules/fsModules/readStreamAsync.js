const fs = require("node:fs");
const isFileExistAsync =  require("./isFileExistAsync.js");

/*no error handleing */
async function readFileStreamAsync(fileDir = "", callBack) {

  if(await isFileExistAsync(fileDir) ===  false )return false;
  
  let Stream;
  return new Promise((resolve) => {
    Stream = fs.createReadStream(fileDir);
    Stream.on("data", (chunk) => {
      callBack(chunk);
    })
    
    Stream.on("end", () => {
      resolve(true);
    })
  })
}

module.exports =  readFileStreamAsync;