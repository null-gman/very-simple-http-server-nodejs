const fsModules = require("../../fsModules/fsModules.js");
const  setMIMEtype = require("../../utils/setMIME.js")
const utils = require("../../utils/utils.js")



/*
  i use this function to get the file the requsted and it path 

*
/
// getDirAndFileNameFromFileFullPath("/folder/folder/folder/folder/") /* gives bug */
function getDirAndFileNameFromFileFullPath(filePath)
{ 
  const pathArray = utils.removeValueFromArray(filePath.split("/"),"");
  let file = "",dir = "";

  if(pathArray.length === 0)
    return ["/",""];
  else if(pathArray.length === 1)
    return ["/",pathArray[0]];

  for (let index = 0; index < pathArray.length - 1; index++) 
    dir += "/" + pathArray[index];
  
  
  file = pathArray.at(-1);
  return [dir,file];
}

async function GET_REQ(req,res,rootDir) {
    if (!req | !res | !rootDir) throw new Error("can't be null");


    const [reqPath,reqFile] = getDirAndFileNameFromFileFullPath(req.url);

    const REQ_URL = req.url;
    let resFilePath = "";
  

    if(REQ_URL === "/" && await fsModules.isFileExistAsync(rootDir , "index.html")) {
        resFilePath = rootDir + "/index.html";
        res.statusCode = 200;
      }
    else if( await fsModules.isFileExistAsync(rootDir +"/"+reqPath, reqFile)){
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