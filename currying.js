const multiply = (a, b) => a * b;

const curriedMultiply = a => b => a * b;

curriedMultiply(5)(5); // 25

// when to use:

const curriedMultiplyBy5 = curriedMultiply(5);

curriedMultiplyBy5(5); // 25
curriedMultiplyBy5(6); // 30
