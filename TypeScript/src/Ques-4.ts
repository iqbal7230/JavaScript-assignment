/*  
Use Destructuring & Spread Operator
    Create a function printUserDetails(user: User): void that logs user details using object destructuring.
*/
interface User {
    userId: number;
    userName: string;
    userEmail: string;
}


function printUserDetails(user: User): void {

    const { userId, userName, userEmail } = user; 

    console.log(`ID: ${userId}`);
    console.log(`Name: ${userName}`);
    console.log(`Email: ${userEmail}`);
}

const user: User = {
    userId: 101,
    userName: "Iqbal",
    userEmail: "iqbal@mail.com"
};

printUserDetails(user);

/*
output:
ID: 101
Name: Iqbal
Email: iqbal@mail.com
*/