const fs = require("node:fs");


function getFileSizeBytesAsync(fileDir) {
  return new Promise((resolve, reject) => {
    fs.stat(fileDir,(err,stats)=>{

      resolve(stats?.size ?? false);
    });
  })
}


module.exports = getFileSizeBytesAsync;