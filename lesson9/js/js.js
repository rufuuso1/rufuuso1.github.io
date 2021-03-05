const menuBtn = document.querySelector(".menu-btn");
const hamburguer = document.querySelector(".menu-btn__burger");
const nav = document.querySelector(".nav");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__item");
const today= new Date();
const todayNum= today.getDate();
const offer= document.getElementById("saturday")
const showMenu = false;

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



