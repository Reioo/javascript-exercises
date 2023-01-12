const sumAll = function(num1, num2) {
    let sum = 0;
    // If number 1 is smaller than number 2, switch places
    if (num1 > num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    
    if(typeof num1 != 'number' || typeof num2 != 'number') {
        return 'ERROR';
    }
    if(num1 < 0 || num2 < 0) {
        return 'ERROR';
    } else {
        for (num1; num1 <= num2; num1++ ) {
            sum += num1;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
