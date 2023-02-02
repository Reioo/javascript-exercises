const fibonacci = function(number) {
    if (number < 0) {
        return "OOPS";
    }
    let numArray = []; 
    for(let i = 0; i < number; i++) {
        if(i < 2) {
            numArray[i] = 1;
        } else {
            numArray[i] = numArray[i - 1] + numArray[i - 2];
        }
    }
    return numArray[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
