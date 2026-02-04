// Explain 5 array methods with example

let arr = [10, 20, 30, 40, 50];

arr.push(60);
console.log("After push:", arr); 

let poppedElement = arr.pop();
console.log("Popped Element:", poppedElement); 
console.log("After pop:", arr); 

let shiftedElement = arr.shift();
console.log("Shifted Element:", shiftedElement); 
console.log("After shift:", arr); 

arr.unshift(5);
console.log("After unshift:", arr); 
console.log("After splice:", arr); 

/*
After push: [ 10, 20, 30, 40, 50, 60 ]
Popped Element: 60
After pop: [ 10, 20, 30, 40, 50 ]
Shifted Element: 10
After shift: [ 20, 30, 40, 50 ]
After unshift: [ 5, 20, 30, 40, 50 ]
After splice: [ 5, 20, 30, 40, 50 ]
*/