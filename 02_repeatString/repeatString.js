const repeatString = function (toRepeat, times) {
    if (times < 0) {
        return "ERROR";
    }
    let buildString = "";
    for (let i = 0; i < times; i++) {
        buildString += toRepeat;
    }
    return buildString;

};

// Do not edit below this line
module.exports = repeatString;
