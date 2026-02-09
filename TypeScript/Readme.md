# Assignment

- Define an interface **User** with the following properties:
  - id (number), name (string), email (string), age (number optional)

- Create a class **UserManager** with:
  - A private array `users: User[]` to store user data.
  - A method `addUser(user: User): void` that adds a new user.
  - A method `removeUser(id: number): void` that removes a user by ID.
  - A method `getUser(id: number): User | undefined` that retrieves a user by ID.
  - A method `getAllUsers(): User[]` that returns all users.

- Use Arrow Functions & Default Parameters
  - Add a method `getUser = (name: string = "Guest"): string` that returns a greeting message.

- Use Destructuring & Spread Operator
  - Create a function `printUserDetails(user: User): void` that logs user details using object destructuring.
