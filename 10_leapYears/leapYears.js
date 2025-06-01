const leapYears = function (testYear) {
    if ((testYear % 4 === 0) && ((testYear % 400 === 0) || (!(testYear % 100 === 0)))) {
        return true;
    } else {
        return false;
    }
};

console.log(leapYears(1996));

// Do not edit below this line
module.exports = leapYears;
