let person = { name: 'Lydia' };
const members = [person];
person = null;

console.log(members);
// Output:
// [ { name: 'Lydia' } ]

/* Explanation:
In this code, we first create an object person with a property name set to 'Lydia'. We then create an array members that contains a reference to the person object.

When we set person to null, we are only changing the reference held by the variable person. The members array still holds a reference to the original object { name: 'Lydia' }.

Therefore, when we log members to the console, it still contains the object with the name property, resulting in the output [ { name: 'Lydia' } ].
*/