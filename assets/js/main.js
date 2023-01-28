// start of hero slider
var slides = document.querySelectorAll("#heroSlider .slider-item");
let sliderNav = document.querySelectorAll(".slider-nav");
let currentSlide = 0;

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
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function autoSlider() {
  setInterval(nextSlide, 5000);
}

autoSlider();

//button controls
document.getElementById("prev-slide").addEventListener("click", function () {
  currentSlide = (currentSlide + totalSlides - 1) % totalSlides;
  showSlide(currentSlide);
});

document.getElementById("next-slide").addEventListener("click", nextSlide);

//nav controls
sliderNav.forEach(function (singleNav, key) {
  singleNav.addEventListener("click", function () {
    currentSlide = key;
    showSlide(currentSlide);
  });
})

// end hero slider