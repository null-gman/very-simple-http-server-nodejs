const fsModules = require("../../fsModules/fsModules.js");
const  setMIMEtype = require("../../utils/setMIME.js")
const utils = require("../../utils/utils.js")
const path = require("node:path");


/*
  i use this function to get the file the requsted and it path 

*/

async function GET_REQ(req,res,rootDir) {
    if (!req | !res | !rootDir) throw new Error("can't be null");

    const reqFile = path.basename(req.url);
    const reqPath = path.dirname(req.url);

    
    const REQ_URL = req.url;
    let resFilePath = "";
  

    if(REQ_URL === "/" && await fsModules.isFileExistAsync(rootDir , "index.html")) {
        resFilePath = rootDir + "/index.html";
        res.statusCode = 200;
      }
    else if( await fsModules.isFileExistAsync(path.join(rootDir,reqPath),reqFile)){
      resFilePath = rootDir + req.url;
      res.statusCode = 200;
    }
    else{
      res.statusCode = 404;  
      if (await fsModules.isFileExistAsync(rootDir , "404.html")){
        resFilePath = rootDir + "/404.html";
      }else{
        res.end("404 not found");
        return;
      }
      
    }
    
    const { MIME } = getFileInfo(resFilePath);
    const FileSize = await fsModules.getFileSizeBytesAsync(resFilePath);
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