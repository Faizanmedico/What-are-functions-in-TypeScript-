// In TypeScript, you can define functions using function declarations, function expressions, and arrow functions. 

//  Function Declarations
function greet(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greet("Sultan")); // Output: Hello, Sultan!


//   Function Expressions
const greetMe = function(name: string): string {
    return `Hello, ${name}!`;
};
console.log(greet("Sultan Ahmed")); // Output: Hello, Sultan Ahmed!


//    Arrow Functions
const greetYou = (name: string): string => {
    return `Hello, ${name}!`;
};

console.log(greet("FaizanMedico")); // Output: Hello, FaizanMedico!



//   Type Annotations


function add(a: number, b: number): number {
    return a + b;
}

console.log(add(2, 3)); // Output: 5
// console.log(add(2, "3")); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.




//    Optional Parameters

function greeting(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    } else {
        return `Hello, ${name}!`;
    }
}

console.log(greeting("Nimra")); // Output: Hello, Nimra!
console.log(greeting("Fatima", "Hi")); // Output: Hi, Fatima!

//    Default Parameters

function greetOne(name: string, greeting: string = "Hello"): string {
    return `${greeting}, ${name}!`;
}

console.log(greetOne("Anayah")); // Output: Hello, Anayah!
console.log(greetOne("Irha", "Hi")); // Output: Hi, Irha!

//    Rest Parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22


//     Function Overloading


function greet1(name: string): string;
function greet1(name: string, age: number): string;
function greet1(name: string, age?: number): string {
    if (age !== undefined) {
        return `Hello, ${name}! You are ${age} years old.`;
    } else {
        return `Hello, ${name}!`;
    }
}

console.log(greet1("Faizan")); // Output: Hello, Faizan!
console.log(greet1("Usman", 30)); // Output: Hello, Usman! You are 30 years old.

//     Higher-Order Functions


function applyOperation(a: number, b: number, operation: (x: number, y: number) => number): number {
    return operation(a, b);
}

const adding = (x: number, y: number): number => x + y;
const multiply = (x: number, y: number): number => x * y;

console.log(applyOperation(2, 3, adding)); // Output: 5
console.log(applyOperation(2, 3, multiply)); // Output: 6





