// Write a program to implement a class having static functions
class MathOperations{
    static add(a,b){
        return a+b;
    }

    static substract(a,b){
        return a-b;
    }

    static multiply(a,b){
        return a*b;
    }
}
console.log(MathOperations.add(5,3));
console.log(MathOperations.substract(5,3));
console.log(MathOperations.multiply(5,3));

/* output:
8
2
15
*/