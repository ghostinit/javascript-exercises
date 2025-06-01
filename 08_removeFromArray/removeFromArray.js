// const removeFromArray = function () {
//     arr = arguments[0]

//     for (let i = 1; i < arguments.length; i++) {
//         arg = arguments[i];
//         while (arr.includes(arg)) {
//             index = arr.findIndex((item) => item === arg);
//             arr.splice(index, 1);
//         }
//     }

//     return arr
// };

const removeFromArray = function (arr, ...args) {
    return arr.filter(item => !args.includes(item));
};



// Do not edit below this line
module.exports = removeFromArray;
