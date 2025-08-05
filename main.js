const path = require("path");

const color = require("./src/utils/color.js");
const start_server = require("./src/server.js");
const Flags = require("./src/utils/getFlages.js");

function main(){
        let {root,port,ip} = Flags;
        if(isNaN(port)){
                console.log(color.red("!!> port is not a number!"));
                process.exit(1);
        }
        if(!root.trim()){
                root = path.join(__dirname, "frontEnd");
        }


        start_server({ root, port, ip });
}

main();
