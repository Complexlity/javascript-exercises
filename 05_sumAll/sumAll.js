const sumAll = function () {
  let args = Array.from(arguments);
  let startValue = args[0];
  let spread = args[1];
  let solve = (startValue, spread) => {
    let total = 0;
    console.log(`${startValue} , ${spread}`);
    for (let i = startValue; i <= spread; i++) {
      total += i;
    }
    if (startValue < 0 || spread < 0) return "ERROR";
    return total;
  };

  if (typeof startValue !== "number" || typeof spread !== "number")
    return "ERROR";

  if (startValue > spread) return solve(spread, startValue);

  return solve(startValue, spread);
};

console.log(sumAll(0, 3434));
// Do not edit below this line
module.exports = sumAll;
