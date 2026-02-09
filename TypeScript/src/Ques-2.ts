/*2. Create a class UserManager with:
    A private array users: User[] to store user data.
    A method addUser(user: User): void that adds a new user.
    A method removeUser(id: number): void that removes a user by ID.
    A method getUser(id: number): User | undefined that retrieves a user by ID.
    A method getAllUsers(): User[] that returns all users. */

export interface User{
    userId:number,
    userName:string,
    userEmail:string,
}

export class UserManager {
    private users:User[] =[];
    
    addUser(user:User):void{
        this.users.push(user)
    }
    removeUser(id: number): void {
    this.users.forEach((user, index) => {
        if (user.userId === id) {
            delete this.users[index]; 
        }
    });
}

    getUser(id:number):User | undefined{
        return this.users.find((user)=> user.userId === id)
    }
    getAllUsers():User[]{
        return this.users;
    }

}
const manager = new UserManager();
manager.addUser({
    userId:101,
    userName: 'Iqbal',
    userEmail:"iqbal.ansari@tothenew.com"

});
manager.addUser({
    userId:102,
    userName: 'Arman',
    userEmail:"arman.ansari@tothenew.com"

});
console.log("--- data of one user---");

console.log(manager.getUser(101));
console.log("------ data of all user----");

console.log(manager.getAllUsers());

console.log("---- after removable---");

manager.removeUser(102)
console.log(manager.getAllUsers());

/* 
output:
--- data of one user---
{
  userId: 101,
  userName: 'Iqbal',
  userEmail: 'iqbal.ansari@tothenew.com'
}
------ data of all user----
[
  {
    userId: 101,
    userName: 'Iqbal',
    userEmail: 'iqbal.ansari@tothenew.com'
  },
  {
    userId: 102,
    userName: 'Arman',
    userEmail: 'arman.ansari@tothenew.com'
  }
]
---- after removable---
[
  {
    userId: 101,
    userName: 'Iqbal',
    userEmail: 'iqbal.ansari@tothenew.com'
  },
  <1 empty item>
]
*/