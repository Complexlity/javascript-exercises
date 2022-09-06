const add = function(a , b) {
	return a + b
};

const subtract = function(a , b) {
	return a - b
};

const sum = function(arr) {
	let total = 0
  for (let i of arr) total += i
  return total
};

const multiply = function(arr) {
  let total = 1
  for (let i of arr) total *= i
  return total
};

const power = function(a , b) {
	return a ** b
};

function factorial(a) {
  if (a <= 1) return 1;
  else return a * factorial(a - 1)
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
