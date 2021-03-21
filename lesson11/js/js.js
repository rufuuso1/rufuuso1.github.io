
const today= new Date();
const todayNum= today.getDate();
const offer= document.getElementById("saturday")


if (todayNum == 5) {
    offer.classList.add("showme")
}else{ offer.classList.add("hideme")}







var lastModified = document.lastModified;
document.getElementById("updated").innerHTML = "Last Updated : " + lastModified;


function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
  }

