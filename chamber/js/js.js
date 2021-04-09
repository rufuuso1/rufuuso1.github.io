
let menuBtn = document.querySelector(".menu-btn");
let hamburguer = document.querySelector(".menu-btn__burger");
let nav = document.querySelector(".nav");
let menuNav = document.querySelector(".menu-nav");
let navItems = document.querySelectorAll(".menu-nav__item");
let showMenu = false;

const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const day= 0; 
const d= new Date();
const todayDayNum = d.getDay();

//summary

const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=3435910&appid=416c13fe86c73d1f7b9908b469e78f7f&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('now').textContent = jsObject.list[0].weather[0].description;
    document.getElementById('courent').textContent = jsObject.list[0].main.temp+' C°';
    document.getElementById('hum').textContent = jsObject.list[0].main.humidity;


/*menu btn*/
menuBtn.addEventListener("click", toggleMenu);
function toggleMenu(){
    if(!showMenu){
        hamburguer.classList.add("open");
        nav.classList.add("open");
        menuNav.classList.add("open");
        navItems.forEach(item => item.classList.add("open"))


        showMenu = true;
    }else{

        hamburguer.classList.remove("open");
        nav.classList.remove("open");
        menuNav.classList.remove("open");
        navItems.forEach(item => item.classList.remove("open"))
        showMenu = false;
    }

}
})
const requestURL = './works.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const works = jsonObject['works'];
    for (let i = 0; i < works.length; i++ ) {
        let card = document.createElement('section');
let h2 = document.createElement('h2');
let p1 = document.createElement('p');
let p2 = document.createElement('p');
let p3 = document.createElement('a');
let image = document.createElement('img');

h2.textContent = works[i].name ;
p1.textContent = works[i].birthdate;
p2.textContent = works[i].birthplace;
p3.textContent = works[i].link;
image.setAttribute('src', works[i].imageurl);
image.setAttribute('alt', works[i].name )


card.appendChild(h2);
card.appendChild(p1);
card.appendChild(p2);
card.appendChild(p3);
card.appendChild(image);

document.querySelector('div.cards').appendChild(card);
        }
       
  });

 

