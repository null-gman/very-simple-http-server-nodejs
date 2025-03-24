
const fsModules = require("../fsModules/fsModules.js");
const  setMIMEtype = require("../utils/setMIME")
async function GET_REQ(req,res,rootDir) {
    if (!req | !res | !rootDir) throw new Error("can't be null");

    const REQ_URL = req.url;
    const isFileExist = await fsModules.isFileExistAsync(
      rootDir + REQ_URL
    );

    let resFilePath = "";
    if (isFileExist) {
      resFilePath = rootDir + REQ_URL;
      res.statusCode = 200;
    } else if(REQ_URL === "/") {
        resFilePath = rootDir + "/index.html";
        res.statusCode = 200;
    }
    else{
      resFilePath = rootDir + "/404.html";
      res.statusCode = 404;
    }

    const { MIME } = getFileInfo(resFilePath);
    const FileSize = fsModules.getFileSizeBytes(resFilePath);
    res.setHeader("Content-Length", FileSize);
    res.setHeader("content-type", MIME);
    function writeRes(data) {
      res.write(data);
    }
    await fsModules.readStreamAsync(resFilePath, writeRes);
    res.end();
}
  
function getFileInfo(filePath) {
    const FILE = filePath.split("/").at(-1) ?? "/";
    const MIME = setMIMEtype(FILE);
    return { MIME };
}
  
module.exports = GET_REQ;