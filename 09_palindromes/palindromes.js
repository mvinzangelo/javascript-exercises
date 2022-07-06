const palindromes = function (string) {
    // remove spaces
    string = string.replace(/\s+/g, '');
    // remove punctuation
    string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    string = string.toLowerCase();
    let reverseString = string.split("");
    reverseString = reverseString.reverse();
    reverseString = reverseString.join("");
    return reverseString == string;
};

// Do not edit below this line
module.exports = palindromes;
