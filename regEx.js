let str = 'hello world';
console.log(/world/.test(str)); // true

console.log(/hello|world/.test(str)); // true

str.match(/hello/); // gives array with containing string

// Special Characters (\w, \W, \s, \S, \d, \D)
// To match all numbers and letters in JavaScript, we use \w which is equivalent to RegEx \[A-za-z0–9_]\.
// To skip all numbers and letters we use \W.
// To match only digits we use \d.
// To not match digits we use \D.
// \s is a RegEx that matches white spaces.
// \S is a RegEx to escape white space.

// g modifier: global. All matches (don't return on first match)

// i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z])
