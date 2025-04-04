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

    
    /* abslote path for the file that will be responsed */
    let resFilePath = "";
    console.log("req.url : ",req.url);
    

    if(req.url === "/" && await fsModules.isFileExistAsync(rootDir , "index.html")) {
        resFilePath = path.join( rootDir , "index.html");
        res.statusCode = 200;
      }
    else if( await fsModules.isFileExistAsync(path.join(rootDir,reqPath),reqFile)){
        resFilePath = path.join(rootDir , req.url);
        res.statusCode = 200;
    }
    else{
      res.statusCode = 404;  
      if (await fsModules.isFileExistAsync(rootDir , "404.html")){
        resFilePath = path.join(rootDir , "404.html");
      }else{
        res.end("404 not found");
        return; /* no header needed */
      } 
    }
    
    setHttpHeaders(res,resFilePath);

    await fsModules.readStreamAsync(resFilePath, (chunck) => res.write(chunck));

    res.end();
}
  

async function setHttpHeaders(resObj,resFilePath) {
  const MIME = setMIMEtype(path.basename(resFilePath));
  const FileSize = await fsModules.getFileSizeBytesAsync(resFilePath);
  resObj.setHeader("Content-Length", FileSize);
  resObj.setHeader("content-type", MIME); 
}

module.exports = GET_REQ;