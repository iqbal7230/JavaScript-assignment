// Explain 3 properties of argument object.

/*
1. Length Property: number of arguments passed to the function.
2. Indexed Access:allows access to individual arguments using index notation, similar to arrays (e.g., arguments[0], arguments[1], etc.).
3. Not a Real Array: The arguments object is not a true array; it does not have array methods like push(), pop(), or forEach(). However, it can be converted to a real array if needed.
*/

function exampleFunction() {
  console.log("Number of arguments:", arguments.length); // Length Property

  for (let i = 0; i < arguments.length; i++) { // Indexed Access
    console.log("Argument " + i + ":", arguments[i]);
  }

  // Converting arguments object to a real array
  const argsArray = Array.from(arguments);
  console.log("Arguments as an array:", argsArray);
}

exampleFunction("Hello", 42, true);

/*
output:
Number of arguments: 3
Argument 0: Hello
Argument 1: 42
Argument 2: true
Arguments as an array: [ 'Hello', 42, true ]
*/