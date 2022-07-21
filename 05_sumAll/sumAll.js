const sumAll = function(a, b) {
    let suma = a + b;
    if (a<0 || b<0 || typeof a !== 'number' || typeof b !== 'number') {
        return 'ERROR';
    }
    else if (a < b) {
        let x = a + 1;
        while (x>a && x<b) {
            suma = suma + x;
            x++;
        }
        return suma;
    }
    else if (a > b) {
        let x = a - 1;
        while (x<a && x>b) {
            suma = suma + x;
            x--;
        }
        return suma;
    }
};


// Do not edit below this line
module.exports = sumAll;
