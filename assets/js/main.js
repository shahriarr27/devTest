// start of hero slider
var slides = document.querySelectorAll("#heroSlider .slider-item");
let sliderNav = document.querySelectorAll(".slider-nav");
let currentSlide2 = 0;

var totalSlides = slides.length;

function showSlide(index) {
  for (var i = 0; i < totalSlides; i++) {
    slides[i].classList.remove('show');
    sliderNav[i].classList.remove('active');
  }
  slides[index].classList.add('show');
  sliderNav[index].classList.add('active');
}

function nextSlide() {
  currentSlide2 = (currentSlide2 + 1) % totalSlides;
  showSlide(currentSlide2);
}

function autoSlider() {
  setInterval(nextSlide, 5000);
}

autoSlider();

//button controls
document.getElementById("prev-slide").addEventListener("click", function () {
  currentSlide2 = (currentSlide2 + totalSlides - 1) % totalSlides;
  showSlide(currentSlide2);
});

document.getElementById("next-slide").addEventListener("click", nextSlide);

//nav controls
sliderNav.forEach(function (singleNav, key) {
  singleNav.addEventListener("click", function () {
    currentSlide2 = key;
    showSlide(currentSlide2);
  });
})

// end hero slider
var currentSlide = 0;
var slider = document.getElementById("slider");
var prevBtn = document.getElementById("btn__prev");
var nextBtn = document.getElementById("btn__next");



function prevSlide() {
  if (currentSlide > 0) {
    showSlide(currentSlide - 1);
  }
}

function showSlide(index) {
    currentSlide = index;
    slider.style.transform = "translateX(-" + (currentSlide * 33.33) + "%)";
}

function nextSlide() {
    if (currentSlide < slider.children.length - 3) {
        showSlide(currentSlide + 1);
    } else {
        currentSlide = 0;
        showSlide(currentSlide);
    }
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);
