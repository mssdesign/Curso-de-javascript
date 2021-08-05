// Only change code below this line
class Thermostat {
    constructor(temperature) {
        this.thermos = (5/9) * (temperature - 32);
    }

    get temperature() {
        return this.thermos;
    }

    set temperature(celc) {
        this.thermos = celc;
    }
}
// Only change code above this line

const thermos = new Thermostat(); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius

console.log(temp)