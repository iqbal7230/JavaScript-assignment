document.getElementById("calculate").addEventListener("click", function(){
    calculator.read();
    document.getElementById("output").innerHTML =`
    Added value: ${calculator.add()} <br>
    Substracted Value: ${calculator.substract()} <br>
    Multiplied value: ${calculator.multipy()}`
})

const calculator ={
    num1: 0,
    num2: 0,
    read: function(){
        this.num1 = Number(prompt("Enter first Number"));
        this.num2 = Number(prompt("Enter Second Number"));
    },
    add: function(){
        return this.num1 + this.num2;
    },
    substract: function(){
        return this.num1 - this.num2;
    },
    multipy: function(){
        return this.num1 * this.num2;
    }

}