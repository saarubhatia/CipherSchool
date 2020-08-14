//arrow function
var dividesEvenly = (a, b) => {
    if (a >= b) {
        var rem = a % b;
        if (rem === 0) {
            return true;
        }
        else {
            return false;
        }
    }
}
console.log(dividesEvenly(98, 7));
console.log(dividesEvenly(85, 4));
console.log(dividesEvenly(6, 7));