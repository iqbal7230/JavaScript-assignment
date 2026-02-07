/* Write a program to implement inheritance upto 3 classes.
The Class must contain private and public variables and static functions. */

class Vehicle {

    #engineNumber;
    constructor(name, type, engineNumber){
        this.name = name;
        this.type = type;
        this.#engineNumber = engineNumber;
    }

    display(){
        console.log(`Vehicle: ${this.name}, Type: ${this.type}, Engine No: ${this.#engineNumber}`);
    }

    static category(){
        console.log("Vehicles are used for transportation.");
    }
}

class Car extends Vehicle {
    constructor(name, type, engineNumber, brand){
        super(name, type, engineNumber);
        this.brand = brand; 
    }

    display(){
        console.log(`Vehicle: ${this.name}, Type: ${this.type}, Brand: ${this.brand}`);
    }

    static wheels(){
        console.log("Cars generally have 4 wheels.");
    }
}

class Sedan extends Car {
    constructor(name, type, engineNumber, brand, model){
        super(name, type, engineNumber, brand);
        this.model = model;
    }

    display(){
        console.log(`Vehicle: ${this.name}, Type: ${this.type}, Brand: ${this.brand}, Model: ${this.model}`);
    }

    static comfort(){
        console.log("Sedan cars are comfortable.");
    }
}



const myCar = new Sedan("BMW", "Sedan", "EN123", "BMW", "X5");

myCar.display();  

// static methods (called using class name)
Vehicle.category();
Car.wheels();
Sedan.comfort();

/*output
Vehicle: BMW, Type: Sedan, Brand: BMW, Model: X5
Vehicles are used for transportation.
Cars generally have 4 wheels.
Sedan cars are comfortable.
*/