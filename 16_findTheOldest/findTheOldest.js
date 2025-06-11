const findTheOldest = function (objArr) {
    const thisYear = 2025;
    for (let obj of objArr) {

        if (typeof (obj.yearOfDeath) === 'undefined') {

            obj.yearOfDeath = thisYear;
        }
    }
    console.log(objArr);
    objArr.sort((a, b) => ((b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)));
    console.log(objArr);
    return objArr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
