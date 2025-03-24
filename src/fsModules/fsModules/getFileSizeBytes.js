const fs = require("node:fs");


function getFileSizeBytes(fileDir) {
  var stats = fs.statSync(fileDir);
  var fileSizeInBytes = stats.size;
  return fileSizeInBytes;
}


module.exports = getFileSizeBytes;