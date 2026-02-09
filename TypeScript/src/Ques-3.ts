/*Use Arrow Functions & Default Parameters
        Add a method getUser = (name: string = "Guest"): string that returns a greeting message.
     */

import { UserManager } from "./Ques-2.js";


class Greet extends UserManager{
    getUserGreet =(name:string ="Guest"):string=>{
        return `Hello, ${name}`;
    }
}

const greet = new Greet();

console.log(greet.getUserGreet("Iqbal"));

/* 
Output:
Hello, Iqbal
*/