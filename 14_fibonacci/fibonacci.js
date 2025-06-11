const fibonacci = function (n) {
    if (typeof (n) === "string") {
        n = Number(n);
    }
    if (n < 0) { return "OOPS" }
    if (n === 0) { return 0 }
    if (n === 1) { return 1 }

    let curr = 0;
    let next = 1;
    let f;
    for (let i = 0; i < (n - 1); i++) {
        f = curr + next;
        curr = next;
        next = f
    }
    return f;
};


// Do not edit below this line
module.exports = fibonacci;
