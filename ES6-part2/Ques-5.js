// Import a module containing the constants and method for 
// calculating area of circle, rectangle, cylinder. 

import { areaOfCircle } from "./utils/areaCircle.js";
import { areaOfCylinder } from "./utils/areaCyclinder.js";
import { areaOfRectangle } from "./utils/areaRectangle.js";

// console.log(areaOfCircle(10));


class AreaCalculator{
    static Circle(radius){
        return areaOfCircle(radius);
    }
    static Rectangle(length, width){
        return areaOfRectangle(length, width);;
    }
    static Cylinder(radius, height){
        return areaOfCylinder(radius, height);
    }
}
const radius = 5;
const length = 10;
const width = 4;
const height = 7;
console.log("Area of Circle:", AreaCalculator.Circle(radius));
console.log("Area of Rectangle:", AreaCalculator.Rectangle(length, width));
console.log("Area of Cylinder:", AreaCalculator.Cylinder(radius, height));

/* Output
Area of Circle: 78.53975
Area of Rectangle: 40
Area of Cylinder: 376.99080000000004
*/