const reverseString = function(reversable) {
    let answer = '';
    for (let i = reversable.length - 1; i >= 0; i--) {
        answer += reversable.charAt(i);
    }
    return answer;
};

// Do not edit below this line
module.exports = reverseString;
