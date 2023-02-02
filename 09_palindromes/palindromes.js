function removePunctuation(str) {
    const punctuationless = str
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .replace(/\s{2,}/g, " ")
      .replace(/\s/g, '');
      return punctuationless;
}

const palindromes = function (str) {
    console.log(str.toLowerCase());

    let copyOfStr = str.toLowerCase();
    copyOfStr = removePunctuation(copyOfStr);
    const halfString = copyOfStr.length / 2;
    for(let i = 0; i < str.length; i++) {
        if(copyOfStr[i] !== copyOfStr[copyOfStr.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

// Do not edit below this line
module.exports = palindromes;



