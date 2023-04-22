let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
function openNav() {
  document.getElementById("content").style.display = "unset";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  document.querySelector(".slideshow-container").style.opacity = "0.5";
  document.getElementById("imgs").style.opacity = "0.5";
  document.getElementById("imags").style.opacity = "0.5";
}
function closeNav() {
  document.getElementById("content").style.display = "none";
  document.querySelector(".slideshow-container").style.opacity = "1";
  document.body.style.backgroundColor = "white";
  document.getElementById("imgs").style.opacity = "1";
  document.getElementById("imags").style.opacity = "1";
}
