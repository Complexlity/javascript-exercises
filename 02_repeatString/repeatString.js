const repeatString = function(multiString, times) {
    let newString = ''
    if (times < 0) return 'ERROR'
    for (let i = 0; i < times; i++) newString += multiString
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
