const UTILS = {};


UTILS.removeValueFromArray= (array = [],value = "") => {
    
    const filterdArray = [];
    for (const index in array) {
        if (array[index] !== value) filterdArray.push(array[index]);   
    } 
    
    return filterdArray;
}



module.exports = UTILS;