const ftoc = function(f) {
    let value = (f-32) * (5/9)
    return parseFloat(value.toFixed(1))
  };

const ctof = function(c) {

    let value = ((c/5) * 9) + 32
    return parseFloat(value.toFixed(1))
  };

console.log(ftoc(3165))
console.log(ctof(1741))
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
