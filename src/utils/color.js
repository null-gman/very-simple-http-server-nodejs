/* #color.js :
 1. proved methodes that return string with colors(ANSI) .
 2. export : a color object conten the methodes .
*/
const color = {};

const ResetColor = "\x1b[0m";
const RedColor = "\x1b[38;2;255;90;50m";
const YellowColor = "\x1b[38;2;255;255;50m";
const GreenColor = "\x1b[38;2;0;205;205m";
const GrayColor = "\x1b[38;2;70;70;70m";


//function constractor
function creatColorMethod(color) {
  return function(string = ""){
    return color+string+ResetColor;
  }
}

color.red = creatColorMethod(RedColor);

color.yellow = creatColorMethod(YellowColor);

color.green = creatColorMethod(GreenColor);

color.gray = creatColorMethod(GrayColor);


module.exports = color;
