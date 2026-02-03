let x =5
function first(){
    console.log(x);
    let y = 10;

    function second(){
        console.log(y);
        console.log(z);
        let z =20;
    }
    second();
}
first();
console.log(y); 