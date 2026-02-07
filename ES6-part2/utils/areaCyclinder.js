import { areaOfCircle } from "./areaCircle.js";
import { pi } from "./pi.js"

export const areaOfCylinder = (radius, height) =>{
    return 2*pi* radius*height + 2*areaOfCircle(radius);
}