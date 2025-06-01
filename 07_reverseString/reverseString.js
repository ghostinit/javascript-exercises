const reverseString = function (string) {
    if (string.length === 0) { return '' }
    stringSplit = string.split("");
    reversedSplit = stringSplit.reverse();
    return reversedSplit.join('');
};


// Do not edit below this line
module.exports = reverseString;
