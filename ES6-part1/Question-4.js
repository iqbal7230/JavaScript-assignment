console.log({a:1} == {a:1});
console.log({a:1} === {a:1});

// Output:
// false
// false

/* Explanation:
In JavaScript, objects are compared by reference, not by value. This means that two different object instances are considered unequal, even if they have the same properties and values.

In the first comparison ({a:1} == {a:1}), we are comparing two different object instances. Since they do not reference the same memory location, the comparison evaluates to false.

Similarly, in the second comparison ({a:1} === {a:1}), we are again comparing two different object instances. The strict equality operator (===) also checks for reference equality, so this comparison also evaluates to false.
*/