const leapYears = function(value) {
    return value % 400 == 0 ? true :
    value % 100 == 0 ? false:
    value % 4 == 0 ? true:
    false
};

// Do not edit below this line
module.exports = leapYears;
