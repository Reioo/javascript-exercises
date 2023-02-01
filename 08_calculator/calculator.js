const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  console.log(a - b);
  return a - b;
};

const sum = function(arr) {
	const totalSum = arr.reduce((total, number) => {
    return total + number;
  }, 0);
  return totalSum;
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};
console.log(sum([4, 6, 8]));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
