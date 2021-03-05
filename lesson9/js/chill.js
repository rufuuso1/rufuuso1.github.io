let tempF = parseFloat(document.getElementById('temperature').textContent);
let speed = parseFloat(document.getElementById('windSpeed').textContent); 
let windChil =35.74 + (0.6215 * tempF - 35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));
windChil= Math.round(windChil)
if (tempF<= 50 && speed >3) {
    document.getElementById('chill').innerHTML ="The Wind Chill is: "+ windChil +  "\xB0F";
}else{
document.getElementById('chill').innerHTML = "Theres no Wind Chill today";
}
