const palindromes = function (string) {
    let filtered = string.toLowerCase().split("").filter((char) => {
        return char.length === 1 && char.match(/[a-z0-9]/i);
    })

    let sanitized = filtered.join('');
    let reversed = filtered.reverse().join('');

    return sanitized === reversed;
};

// Do not edit below this line
module.exports = palindromes;
