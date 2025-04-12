const http = require("node:http");

const  getIpv4 = require("./src/networkModules/getIpv4");
const  getFlages = require("./src/utils/getFlages.js");
const GET_REQ = require("./src/requestMethodes/GET_REQ/GET_REQ.js");
const color = require("./src/utils/color.js");





function server() {
    
    /* to use the crunt working directory as root folder use (-root "." )*/
    const RootDir = getFlages["root"] === "./" ? "." : getFlages["root"] ?? "./frontEnd" ;

    
    console.log(   "website root path :",color.yellow(RootDir) ,
                    color.gray("(if start with './' or without '/' means 'from current working directory')")
                );

    const HostInfo = {ip : undefined , port :undefined};
    HostInfo.ip = getIpv4();
    HostInfo.port = 80;

    if(!HostInfo.ip){
        console.log(color.red("error with geting ipv4 ."));
        process.exit();
    }


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



server(); 