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

//transaction slider
var currentSlide = 0;
var slider = document.getElementById("slider");
var prevBtn = document.getElementById("btn__prev");
var nextBtn = document.getElementById("btn__next");
let scrollbar = document.getElementById("scrollbar");
let slidesLength = slider.children.length;

function prevCardSlide() {
  if (currentSlide > 0) {
    showCardSlide(currentSlide - 1);
  }
}

function showCardSlide(index) {
    currentSlide = index;
    slider.style.transform = "translateX(-" + (currentSlide * 31) + "%)";
    updateScrollbar();
}

function nextCardSlide() {
    if (currentSlide < slider.children.length - 3) {
      showCardSlide(currentSlide + 1);
    } else {
        currentSlide = 0;
        showCardSlide(currentSlide);
    }
    console.log(currentSlide);
}

function updateScrollbar() {
  scrollbar.style.width = (currentSlide + 1) / slidesLength * 100 + "%";
}

updateScrollbar();

prevBtn.addEventListener("click", prevCardSlide);
nextBtn.addEventListener("click", nextCardSlide);
