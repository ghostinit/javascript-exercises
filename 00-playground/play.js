// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (Number.isFinite(obj[key])) {
            obj[key] *= 2;
        }
    }
}

multiplyNumeric(menu);

console.log(menu);