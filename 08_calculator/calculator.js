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

const multiply = function(arr) {
  const totalMultiplied = arr.reduce((total, number) => {
      return total * number;
  }, 1); //First time total is undefined, if it would be 0 
         //then all numbers would be multiplied by 0
  if(arr.length == 0) {
    return 0;
  } else {
    return totalMultiplied;
  }
};

const power = function() {
	
};

const factorial = function() {
	
};
console.log(multiply([])
);
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
