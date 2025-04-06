const fsModules = require("../../fsModules/fsModules.js");

async function setHttpHeaders(resObj,headersObjs) {
  

    for (const key of  Object.keys(headersObjs)) {
        const value = headersObjs[key] ?? "";
        resObj.setHeader(key, value);
    }
}


module.exports = setHttpHeaders;