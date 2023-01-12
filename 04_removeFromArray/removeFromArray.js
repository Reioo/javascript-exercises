const removeFromArray = function(array, ...element) {
    let answer = array;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j<element.length; j++) {
            if (answer.includes(element[j])) {
                answer.splice(answer.indexOf(element[j]), 1);    
            }
        }        
    }
    return answer;
};
// Do not edit below this line
module.exports = removeFromArray;
