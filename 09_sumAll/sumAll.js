const sumAll = function (numA, numB) {
    if (typeof (numA) !== 'number' || typeof (numB) !== 'number') { return 'ERROR' };
    if (Math.floor(numA) !== numA || Math.floor(numB) !== numB) { return 'ERROR' };

    // Better way to do above lines, test directly for int
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";

    if (numA < 0 || numB < 0) return 'ERROR';


    let startNum;
    let endNum;

    if (numA < numB) {
        startNum = numA;
        endNum = numB;
    } else {
        startNum = numB;
        endNum = numA;
    }

    let sum = 0;
    for (let i = startNum; i <= endNum; i++) {
        sum += i;
    }
    return sum;
};



// Do not edit below this line
module.exports = sumAll;
