let user={ name:"Piyush", age:24 }
const {name}= user;
console.log(name);
const { name: myName } = { name: 'Lydia' };

console.log(name); 

// Output:
// Piyush
// Piyush

/* Explanation:
In the first, we extract the name property from the user object and assign it to a new constant called name. So, when we log name, it outputs "Piyush".

In the second, we attempt to extract the name property from a new object { name: 'Lydia' } and assign it to a new constant called myName. 
However, we then log name again, which still refers to the original name constant from the user object. Therefore, it still outputs "Piyush".
*/