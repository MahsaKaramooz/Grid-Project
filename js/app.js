const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
const videoShow = document.querySelector('#video-container');


// add fixed class to navbar
window.addEventListener("scroll", function () {
  if (window.scrollY > 80) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});

// show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});

// close sidebar
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

// set year
date.innerHTML = new Date().getFullYear();
// video
videoShow.addEventListener('click' , ()=>{
  
  videoShow.play();
  videoShow.loop = true;
  videoShow.muted = true;

})
