// Write a program to flatten a nested array to single level using arrow functions. 

const nestedArr = [1, 2, [3, [3,4,6]], [5, 6], 7];

const flattenArr = (arr)=>arr.flat(Infinity);
// infinity for deep nesting 

const result = flattenArr(nestedArr);
console.log(result);

/* ouput 
[
  1, 2, 3, 3, 4,
  6, 5, 6, 7
]
*/