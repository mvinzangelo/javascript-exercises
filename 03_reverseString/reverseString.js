const reverseString = function (toReverse) {
    let reversedString = "";
    for (let i = toReverse.length - 1; i >= 0; i--) {
        reversedString += toReverse.at(i);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
