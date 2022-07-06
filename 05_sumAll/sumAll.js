const sumAll = function (x, y) {
    if (x < 0 || y < 0 || !Number.isFinite(x) || !Number.isFinite(y)) {
        return "ERROR";
    }
    let upperLimit = 0;
    let lowerLimit = 0;
    if (x > y) {
        upperLimit = x;
        lowerLimit = y;
    }
    else {
        upperLimit = y;
        lowerLimit = x;
    }
    let sum = 0;
    for (let i = 0; i <= upperLimit - lowerLimit; i++) {
        sum += lowerLimit + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
