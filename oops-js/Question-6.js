// Create a counter using closures. 
function Counter(){
    let count = 0;

    return function(){
        count++;
        console.log("Count:", count);
    }   
}
const counter1 = Counter();
counter1(); 
counter1(); 

/* 
Output:
Count: 1
Count: 2
*/