const repeatString = function (string, repeatCount) {
    if (repeatCount === 0) {
        return '';
    } else if (repeatCount < 0) {
        return 'ERROR';
    }

    let newString = string;
    for (let i = 1; i < repeatCount; i++) {
        newString += string;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
