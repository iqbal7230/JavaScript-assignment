// Explain difference between Bind and Call (example).

/*
The call() method can be used to call a function with a specific this.
The call() method lets an object use a method belonging to another object.
In this way, the same method can be used on different objects.
*/

function sayHello() {
  return "Hello " + this.name;
}
// console.log(sayHello());  // Output: Hello undefined
const person = { name: "Iqbal" };
console.log(sayHello.call(person));


/*
bind():
The bind() method creates a new function that, when called, has its this keyword set to the provided value.
It allows you to create a new function with a specific this value and optional initial arguments.
*/

function greet(name) {
  return "Hello, " + this.name ;
}
const user = { 
    name: "Ansari" 
};
const greetUser = greet.bind(user);
console.log(greetUser()); // Output: Hello, Ansari!
// greetUser is a new function that always uses user as this.

/* 
output:
Hello Iqbal
Hello, Ansari
*/