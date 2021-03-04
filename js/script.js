var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

var scrolltop = document.getElementById("scrollup");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrolltop.style.display = "block";
  } else {
    scrolltop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const bar = document.querySelector(".status");
const statusBar = () => {
  currentScroll = Math.round(window.scrollY / (document.documentElement.offsetHeight - window.innerHeight) * 100);
  bar.style.width = currentScroll + "%";
}

window.addEventListener("scroll", statusBar);

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".navigation");
const navItems = nav.querySelectorAll(".navigation-item > a");

const handleClick = () => {
  hamburger.classList.toggle("hamburger--active");
  nav.classList.toggle("navigation--active");
};

hamburger.addEventListener("click", handleClick);
[...navItems].forEach((item) => {
  item.addEventListener("click", handleClick);
});

