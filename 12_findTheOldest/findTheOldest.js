const findTheOldest = function (arr) {
    return arr.reduce(
        (previousValue, currentValue) => {
            let previousAge = 0;
            let currentAge = 0;
            if (!previousValue.hasOwnProperty("yearOfDeath")) {
                previousAge = Number(2022) - previousValue.yearOfBirth;
            }
            else {
                previousAge = previousValue.yearOfDeath - previousValue.yearOfBirth;
            }
            if (!currentValue.hasOwnProperty("yearOfDeath")) {
                currentAge = Number(2022) - currentValue.yearOfBirth;
            }
            else {
                currentAge = currentValue.yearOfDeath - currentValue.yearOfBirth;
            }
            if (previousAge > currentAge) {
                return previousValue;
            }
            else {
                return currentValue;
            }

        }

    );
};

// Do not edit below this line
module.exports = findTheOldest;
