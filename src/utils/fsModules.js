const fs = require("fs");
const FS_MODULES = {};

FS_MODULES.fileSizeByte = (path) => {
        return new Promise((resolve, reject) => {
                fs.stat(path, (err, stat) => {
                        if (err) {
                                reject(err.errno);
                        } else if (stat.isFile()) {
                                resolve(stat.size);
                        } else {
                                reject("ER-DIR_NOT_FILE");
                        }
                });
        });
};

FS_MODULES.readStream = (filePath, callBack) => {
        return new Promise((resolve, reject) => {

                        let stream = fs.createReadStream(filePath);

                        stream.on("data", (chunk) => {
                                callBack(chunk);
                        });

                        stream.on("end", () => {
                                resolve(true);
                        });
                });
};


FS_MODULES.ifFileExist = (filePath)=>{
        return fs.existsSync(filePath) && (fs.statSync(filePath)).isFile();
}

module.exports = FS_MODULES;
