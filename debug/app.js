function zero(x) {
    if (x === undefined) {
        return 0;
    }
    else if (x[0] === '+') {
        return 0 + x[1];
    }
    else if (x[0] === '-') {
        return 0 - x[1];
    }
    else if (x[0] === '*') {
        return 0 * x[1];
    }
    else if (x[0] === '/') {
        return Math.floor(0 / x[1]);
    }
}
function one(x) {
    if (x === undefined) {
        return 1;
    }
    else if (x[0] === '+') {
        return 1 + x[1];
    }
    else if (x[0] === '-') {
        return 1 - x[1];
    }
    else if (x[0] === '*') {
        return 1 * x[1];
    }
    else if (x[0] === '/') {
        return Math.floor(1 / x[1])
    }
}
function two(x) {
    if (x === undefined) {
        return 2;
    }
    else if (x[0] === '+') {
        return 2 + x[1];
    }
    else if (x[0] === '-') {
        return 2 - x[1];
    }
    else if (x[0] === '*') {
        return 2 * x[1];
    }
    else if (x[0] === '/') {
        return Math.floor(2 / x[1]);
    }
}
function three(x) {
    if (x === undefined) {
        return 3;
    }
    else if (x[0] === '+') {
        return 3 + x[1];
    }
    else if (x[0] === '-') {
        return 3 - x[1];
    }
    else if (x[0] === '*') {
        return 3 * x[1];
    }
    else if (x[0] === '/') {
        return Math.floor(3 / x[1]);
    }
}
function four(x) {
    if (x === undefined) {
        return 4;
    }
    else if (x[0] === '+') {
        return 4 + x[1];
    }
    else if (x[0] === '-') {
        return 4 - x[1];
    }
    else if (x[0] === '*') {
        return 4 * x[1];
    }
    else if (x[0] === '/') {
        return Math.floor(4 / x[1]);
    }
}
function five(x) {
    if (x === undefined) {
        return 5;
    }
    else if (x[0] === '+') {
        return 5 + x[1];
    }
    else if (x[0] === '-') {
        return 5 - x[1];
    }
    else if (x[0] === '*') {
        return 5 * x[1];
    }
    else if (x[0] === '/') {
        return Math.floor(5 / x[1]);
    }
}
function six(x) {
    if (x === undefined) {
        return 6;
    }
    else if (x[0] === '+') {
        return 6 + x[1];
    }
    else if (x[0] === '-') {
        return 6 - x[1];
    }
    else if (x[0] === '*') {
        return 6 * x[1];
    }
    else if (x[0] === '/') {
        return Math.floor(6 / x[1]);
    }
}
function seven(x) {
    if (x === undefined) {
        return 7;
    }
    else if (x[0] === '+') {
        return 7 + x[1];
    }
    else if (x[0] === '-') {
        return 7 - x[1];
    }
    else if (x[0] === '*') {
        return 7 * x[1];
    }
    else if (x[0] === '/') {
        return Math.floor(7 / x[1]);
    }
}
function eight(x) {
    if (x === undefined) {
        return 8;
    }
    else if (x[0] === '+') {
        return 8 + x[1];
    }
    else if (x[0] === '-') {
        return 8 - x[1];
    }
    else if (x[0] === '*') {
        return 8 * x[1];
    }
    else if (x[0] === '/') {
        return Math.floor(8 / x[1]);
    }
}
function nine(x) {
    if (x === undefined) {
        return 9;
    }
    else if (x[0] === '+') {
        return 9 + x[1];
    }
    else if (x[0] === '-') {
        return 9 - x[1];
    }
    else if (x[0] === '*') {
        return 9 * x[1];
    }
    else if (x[0] === '/') {
        return Math.floor(9 / x[1]);
    }
}

function plus(a) {
    return ['+', a];
}
function minus(a) {
    return ['-', a];
}
function times(a) {
    return ['*', a];
}
function dividedBy(a) {
    return ['/', a];
}
console.log(eight(dividedBy(four())))
let string = "kokokok"
let num = 123
console.log(string + num);