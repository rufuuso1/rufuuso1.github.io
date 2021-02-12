const menuBtn = document.querySelector(".menu-btn");
const hamburguer = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");
const today= new Date();
const todayNum= today.getDate();
const offer= document.getElementById("saturday")
const showMenu = false;
let tempF = parseFloat(document.getElementById('temperature').textContent);
let speed = parseFloat(document.getElementById('windSpeed').textContent); 
let windChil =35.74 + (0.6215 * tempF - 35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));
windChil= Math.round(windChil)
if (tempF<= 50 && speed >3) {
    document.getElementById('chill').innerHTML ="The Wind Chill is: "+ windChil +  "\xB0F";
}else{
document.getElementById('chill').innerHTML = "Theres no Wind Chill today";
}

if (todayNum == 5) {
    offer.classList.add("showme")
}else{ offer.classList.add("hideme")}

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu(){
    if(!showMenu){
        hamburguer.classList.add("open");
        nav.classList.add("open");
        menuNav.classList.add("open");
        navItems.forEach(item => item.classList.add("open"))


        showMenu= true;
    }else{

        hamburguer.classList.remove("open");
        nav.classList.remove("open");
        menuNav.classList.remove("open");
        navItems.forEach(item => item.classList.remove("open"))
        showMenu = false;
    }

}



var lastModified = document.lastModified;
document.getElementById("updated").innerHTML = "Last Updated : " + lastModified;
