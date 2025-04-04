const http = require("node:http");

const  getIpv4 = require("./src/networkModules/getIpv4");
const  getFlages = require("./src/utils/getFlages.js");
const GET_REQ = require("./src/requestMethodes/GET_REQ/GET_REQ.js");
const color = require("./src/utils/color.js");

const HostInfo = {ip : undefined , port :undefined};
HostInfo.ip = getIpv4();
HostInfo.port = 80;

/* to use the crunt working directory as root folder use (-root "." )*/
const RootDir = getFlages["root"] === "./" ? "." : getFlages["root"] ?? "./frontEnd" ;



function server() {
    const Server = http.createServer((req,res)=>{

        console.log(
            "> " +  "Data: "    + color.green(new Date().toISOString()) + " | "+
                    "method: "  + color.green(req.method)               + " | "+
                    "url: "     + color.green(req.url) 
        );
        
        switch (req.method) {
            case "GET":
                GET_REQ(req,res,RootDir);
                break;
            default:
                res.end("not allowed method");
                break;
        }
    })

    Server.listen(
        HostInfo.port , HostInfo.ip ,
        ()=>console.log(
            "server listen on : " +color.yellow(`http://${HostInfo.ip+":"+HostInfo.port}\n`)
        )
    )
}

function main() {
    server(); /*thats it :) */
}

main()