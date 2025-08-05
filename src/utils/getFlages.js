const CommandLineArgs = require("command-line-args");

const optionDefinitions = [
  {
    name: "root", alias: "r", type: String,defaultValue:""
  },
  {
    name: "ip", alias: "i", type: String, defaultValue: "localhost"
  },
  {
    name: "port", alias: "p", type: Number, defaultValue:8080
  }

];

const options = CommandLineArgs(optionDefinitions, { partial: true });
delete options._unknown;

module.exports = options;
