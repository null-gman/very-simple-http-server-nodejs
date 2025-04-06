const path = require("node:path");

const setMIMEtype = require("../../utils/setMIME.js")
const fsModules = require("../../fsModules/fsModules.js");
const setHttpHeaders = require("./setHttpHeaders.js");
const handel_404 = require("./handel_404.js");

/*
  i use this function to get the file the requsted and it path 
*/

async function GET_REQ(req,res,rootDir) {
    if (!req | !res | !rootDir) throw new Error("can't be null");

    const  fileDir = path.dirname(req.url);
    const fileName = path.basename(req.url);
    const FullRootFolePathName = path.join(rootDir,fileDir,fileName);
    /* abslote path for the file that will be responsed */
    let resFilePath = "";
  

    

    if(req.url === "/" && await fsModules.isFileExistAsync(path.join(rootDir , "index.html"))) {
        resFilePath = path.join( rootDir , "index.html");
        res.statusCode = 200;
      }
    else if( await fsModules.isFileExistAsync(FullRootFolePathName)){
        resFilePath = FullRootFolePathName;
        res.statusCode = 200;
    }
    else{
      handel_404(req,res,rootDir,["","404.html"]);
      return;
    }

    
    const MIME = setMIMEtype(path.basename(resFilePath));
    const FileSize = await fsModules.getFileSizeBytesAsync(resFilePath);
    
    setHttpHeaders(res,{  "Content-Length":FileSize,
                          "content-type": MIME      
                        });
    await fsModules.readStreamAsync(resFilePath, (chunck) => res.write(chunck));
    res.end();
}
  

module.exports = GET_REQ;