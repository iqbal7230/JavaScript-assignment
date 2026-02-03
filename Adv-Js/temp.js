document.getElementById("temperature").addEventListener("click", function(){
    temperatureConverter.read();
    temperatureConverter.display();
    document.getElementById("temp-output").innerHTML="Celsius:"+ temperatureConverter.value + 
    "<br>Fahrenheit: "+ temperatureConverter.toFahrenheit() + 
    "<br>Kelvin: "+ temperatureConverter.toKelvin()
})
const temperatureConverter  = {
    value:0,
    read: function(){
        this.value = Number(prompt("Enter temperature in Celsius"));
    },
    toFahrenheit: function(){
        return this.value * (9/5) + 32
    },
    toKelvin: function(){
        return this.value + 273.15
    },
    display: function(){
        console.log("Celsius:"+this.value + "\n Fahrenheit: "+ this.toFahrenheit() 
        + "\n Kelvin: "+this.toKelvin())
    }

}