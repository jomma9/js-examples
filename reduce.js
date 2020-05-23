const myArray = [1,2,3,4,5];

// find the sum of array values

myArray.reduce((accumulator, currentElement) => accumulator + currentElement, 0); // 15

myArray.reduce((accumulator, currentElement) => accumulator + currentElement, 50) // 65
