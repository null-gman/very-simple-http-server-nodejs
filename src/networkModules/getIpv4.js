/* # getIpv4 :
1. gets the ipv4 from node:os module (os.networkInterfaces()) ,
   and loop to get the match "192.168.1.X ipv4" if didn't found then return false .
2. export : getIpv4() function ;

 */

const  os = require ("node:os");

/*it's mess out there , i am not refact this (it's works :)) */
const getIpv4 = () => {
  const networkData = os.networkInterfaces();
  for (let ele in networkData) {
    for (const arr of networkData[ele]) {
      for (let data in arr) {
        let value = String(arr[data]);
        let firstSrc = value.split(".")[0] || value;
        let lastLastSrc = value.split(".")[2] || value;
        if (firstSrc === "192" && lastLastSrc === "1") {
          return value;
        }
      }
    }
  }
  return false;
};

module.exports =  getIpv4;
