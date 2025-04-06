const path = require("node:path");
const fsModules = require("../../fsModules/fsModules");
const setHttpHeaders = require("./setHttpHeaders.js");
const setMIME = require("../../utils/setMIME.js");
async function handel_404(req,res,rootDir,[filePath,file_404]) {

    
    const resFile404Path = path.join(rootDir,filePath,file_404);
    res.statusCode = 404;

    /* is not found  */
    if (!await fsModules.isFileExistAsync(resFile404Path)){
        res.end("404 code : file/path not exist");
        return;
    }
    
    const MIME = setMIME(file_404);
    const FileSize = await fsModules.getFileSizeBytesAsync(resFile404Path);
    
    setHttpHeaders(res,{  "Content-Length":FileSize,
                          "content-type": MIME      
                        });

    await fsModules.readStreamAsync(resFile404Path, (chunck) => res.write(chunck));
    res.end();
    return;
}


module.exports = handel_404;