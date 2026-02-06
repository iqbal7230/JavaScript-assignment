/* Write a program to implement inheritance upto 3 classes.
The Class must contain private and public variables and static functions. */

class vehicle {
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
     diplay(){
        console.log(`The name of the vehicle is ${this.name} and the type is ${this.type}`);
    }
    
}
const car = new vehicle("BMW", "Sedan");
car.diplay();