// The result of a ?? b is:

// a if it’s not null or undefined,
// b, otherwise.
// So, x = a ?? b is a short equivalent to
// x = (a !== null && a !== undefined) ? a : b;

// example:

let fname = null;
let lname = 'jomma';

console.log(fname ?? lname); // jomma
