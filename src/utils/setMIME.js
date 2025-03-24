/* # setMIME.js :
  1. get the MIME type for the file .
  2. return it as string like : index.html -> "text/html" , and return false is it unkowun .
  3. export : function setMIMEtype().


*/

const MIME = {}
MIME["js"] = "text/javascript";
MIME["html"] = "text/html";
MIME["htm"] = "text/html";
MIME["css"] = "text/css";
MIME["json"] = "application/json";
MIME["zip"] = "application/zip";
MIME["jpg"] = "image/jpeg";



function setMIMEtype(fullFileName = "") {
  if (fullFileName === "") return false;

  let resMIME = "";
  fullFileName = fullFileName.trim();
  fullFileName = fullFileName.toLocaleLowerCase();



  const fileNameExArr = fullFileName.split(".");
  if (fileNameExArr.length < 2) {
    return false;
  }


  // const fileName = fileNameExArr[0]; /* not used */
  const fileEx = fileNameExArr.at(-1); /*get last .xxx */

  resMIME = MIME[String(fileEx).toLowerCase()];
  if (!resMIME) {
    return false;
  }

  return resMIME;
}


module.exports = setMIMEtype;