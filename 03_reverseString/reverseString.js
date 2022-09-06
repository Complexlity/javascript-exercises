const reverseString = function(toReverse) {
    let reversed = ''  
    for (let i = toReverse.length - 1; i > -1; i--){
        reversed += toReverse[i]
      }
    return reversed
};

// Do not edit below this line
module.exports = reverseString;
