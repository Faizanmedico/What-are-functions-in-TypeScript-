// In TypeScript, you can define functions using function declarations, function expressions, and arrow functions. 
//  Function Declarations
function greet(name) {
    return "Hello, ".concat(name, "!");
}
console.log(greet("Sultan")); // Output: Hello, Sultan!
//   Function Expressions
var greetMe = function (name) {
    return "Hello, ".concat(name, "!");
};
console.log(greet("Sultan Ahmed")); // Output: Hello, Sultan Ahmed!
//    Arrow Functions
var greetYou = function (name) {
    return "Hello, ".concat(name, "!");
};
console.log(greet("FaizanMedico")); // Output: Hello, FaizanMedico!
//   Type Annotations
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // Output: 5
// console.log(add(2, "3")); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
//    Optional Parameters
function greeting(name, greeting) {
    if (greeting) {
        return "".concat(greeting, ", ").concat(name, "!");
    }
    else {
        return "Hello, ".concat(name, "!");
    }
}
console.log(greeting("Nimra")); // Output: Hello, Nimra!
console.log(greeting("Fatima", "Hi")); // Output: Hi, Fatima!
//    Default Parameters
function greetOne(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return "".concat(greeting, ", ").concat(name, "!");
}
console.log(greetOne("Anayah")); // Output: Hello, Anayah!
console.log(greetOne("Irha", "Hi")); // Output: Hi, Irha!
//    Rest Parameters
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 0);
}
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22
function greet1(name, age) {
    if (age !== undefined) {
        return "Hello, ".concat(name, "! You are ").concat(age, " years old.");
    }
    else {
        return "Hello, ".concat(name, "!");
    }
}
console.log(greet1("Faizan")); // Output: Hello, Faizan!
console.log(greet1("Usman", 30)); // Output: Hello, Usman! You are 30 years old.
//     Higher-Order Functions
function applyOperation(a, b, operation) {
    return operation(a, b);
}
var adding = function (x, y) { return x + y; };
var multiply = function (x, y) { return x * y; };
console.log(applyOperation(2, 3, adding)); // Output: 5
console.log(applyOperation(2, 3, multiply)); // Output: 6
