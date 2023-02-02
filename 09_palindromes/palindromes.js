const palindromes = function () {

};

// Do not edit below this line
module.exports = palindromes;

function removePunctuation(str) {
    const punctuationless = str
      .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
      .replace(/\s{2,}/g, " ")
      .replace(/\s/g, '');
      return punctuationless
}

const s = "This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation";
console.log(removePunctuation(s));