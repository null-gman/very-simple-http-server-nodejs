const path = require('node:path');
const HTTP = require("node:http");

const color = require("./utils/color.js");
const FS_MODULES = require('./utils/fsModules.js');
const mime = require('mime-types');

function start_server({ root, port, ip }) {
        const server = HTTP.createServer(async (req, res) => {
                console.log(`- ${req.method}: ${req.url}`);
                if (req.method !== "GET") {
                        res.statusCode = 405;
                        res.statusMessage = "Method Not Allowed";
                        return res.end();
                }

                const FILE_PATH  = path.join(root, (req.url === "/" ? "index.html" : req.url));

                if(! FS_MODULES.ifFileExist(FILE_PATH)){
                        res.statusCode = 404;
                        res.statusMessage = "File Not Exist";
                        return res.end("file not exist");
                }

                res.statusCode = 200;
                res.statusMessage = "Good";
                res.setHeader("Content-Length", await FS_MODULES.fileSizeByte(FILE_PATH));
                res.setHeader("Content-Type", mime.lookup(FILE_PATH));
                await FS_MODULES.readStream(FILE_PATH, (chunck) => res.write(chunck));

                res.end();
        });

        server.listen(port, ip, () => {
                console.log(
                        color.yellow(
                                `!> server is listen on ${ip + ":" + port} at ${root}\n`,
                        ),
                );
        });
}

module.exports = start_server;
