const repeatString = function(string, num) {
    let word = '';
    if (num < 0) {
        return "ERROR";
    }
    for (let i = 1; i <= num; i++) {
        word = `${word}${string}`;
    }
    return word;
}

repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
