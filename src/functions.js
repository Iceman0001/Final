function hello(name){
    return(`hello ${name}`);
}

function fahrenheitToCelsius(fahrenheit){
    const celsius = (fahrenheit -32) * 5/9
    return celsius;
}



function colour_mix(rgb_colour1, rgb_colour2){
    const colours = ["red", "blue", "green"]
    if (!colours.includes(rgb_colour1) || !colours.includes(rgb_colour2)) return "Error"
    if (rgb_colour1 === rgb_colour2) return rgb_colour1;
    const mix = new Set ([rgb_colour1, rgb_colour2]);
    if (mix.has("red") && mix.has("blue")) return "fuschia";
    if (mix.has("red") && mix.has("green")) return "yellow";
    if (mix.has("blue") && mix.has("green")) return "aqua";
    return "Error";

}


function largest_product(val1, val2, val3){
    const values = [val1, val2, val3];
    values.sort((a, b) => b - a);

    return values[0] * values[1];
        }

 function day_of_the_week (day_num){
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    if (day_num < 1 || day_num > 7) return "Error";
    return days [day_num -1];

 }
        
 function pay_raise(status, years, salary){
    status = status.toUpperCase().trim();
    let raise = 0;

    if (status === 'F') {
        if (years >= 10) {
            raise = 0.05;
        } else if (years < 4) {
            raise = 0.015;
        } else {
            raise = 0.02;
        }
    } else if (status === 'P') {
        if (years > 10) {
            raise = 0.03;
        } else if (years < 4) {
            raise = 0.01;
        } else {
            raise = 0.02;
        }
    } else {
        return "Error"; 
    }

    const new_salary = salary + (salary * raise);
    return new_salary;
}  

function is_leap(year){
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            return year % 400 === 0;
        }
        return true;
    }
    return false;
}

export {hello, fahrenheitToCelsius, colour_mix, largest_product, day_of_the_week, pay_raise, is_leap}