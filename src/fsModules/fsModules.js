/* read ./README.md */
const renameAsync = require("./fsModules/renameAsync.js");
const deletFileAsync = require("./fsModules/deletFileAsync.js");
const isFileExistAsync = require("./fsModules/isFileExistAsync.js");
const appendFileAsync = require("./fsModules/appendFileAsync.js");
const readStreamAsync = require("./fsModules/readStreamAsync.js");
const writeStream = require("./fsModules/writeStream.js");
const getFileSizeBytesAsync = require("./fsModules/getFileSizeBytesAsync.js");
const readDirAsync = require("./fsModules/readDirAsync.js");
const writeFileAsync = require("./fsModules/writeFileAsync.js");



const FS_MODULES = {
  renameAsync,
  deletFileAsync,
  isFileExistAsync,
  appendFileAsync,
  readStreamAsync,
  writeStream,
  getFileSizeBytesAsync,
  readDirAsync,
  writeFileAsync,
}


module.exports = FS_MODULES;

/* use it to test the module */
// async function test() {
//   // console.log(await appendFileAsync("./test.s", "w hello world"));
//   const newfile = writeStream("new.txt");
//   function w(params) {
//     newfile.write(params);
//   }
//   await readStreamAsync("./test.s",w)
//   console.log("end");
// }
// test();

