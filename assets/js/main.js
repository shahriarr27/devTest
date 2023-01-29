// start of hero slider
var slides = document.querySelectorAll("#heroSlider .slider-item");
let sliderNav = document.querySelectorAll(".slider-nav");
var prevSlideBtn = document.getElementById("prev-slide");
var nextSlideBtn = document.getElementById("next-slide");
let currentSlide = 0;

var totalSlides = slides.length;

function showSlide(index) {
  for (var i = 0; i < totalSlides; i++) {
    slides[i].classList.remove('show');
    sliderNav[i].classList.remove('active');
  }
  slides[index].classList.add('show');
  sliderNav[index].classList.add('active');

  disableNextBtn();
  disablePrevBtn();
}


function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

function disablePrevBtn() {
  if(currentSlide == 0){
    prevSlideBtn.disabled = true;
  }else {
    prevSlideBtn.disabled = false;
  }
}
function disableNextBtn() {
  if(currentSlide == totalSlides - 1){
    nextSlideBtn.disabled = true;
  }else {
    nextSlideBtn.disabled = false;
  }
}
disablePrevBtn();

//uncomment this if needs auto slide
// function autoSlider() {
//   setInterval(nextSlide, 5000);
// }

// autoSlider();

//button controls
prevSlideBtn.addEventListener("click", function () {
  currentSlide = (currentSlide + totalSlides - 1) % totalSlides;
  showSlide(currentSlide);
});

nextSlideBtn.addEventListener("click", nextSlide);

//nav controls
sliderNav.forEach(function (singleNav, key) {
  singleNav.addEventListener("click", function () {
    currentSlide = key;
    showSlide(currentSlide);
  });
})

// end hero slider

//transaction slider
var currentSlide2 = 0;
var slider = document.getElementById("slider");
var prevBtn = document.getElementById("btn__prev");
var nextBtn = document.getElementById("btn__next");
let scrollbar = document.getElementById("scrollbar");
let slidesLength = slider.children.length;

function prevCardSlide() {
  if (currentSlide2 > 0) {
    showCardSlide(currentSlide2 - 1);
  }
}

function showCardSlide(index) {
    currentSlide2 = index;
    slider.style.transform = "translateX(-" + (currentSlide2 * 31) + "%)";
    updateScrollbar();
}

function nextCardSlide() {
    if (currentSlide2 < slider.children.length - 3) {
      showCardSlide(currentSlide2 + 1);
    } else {
        currentSlide2 = 0;
        showCardSlide(currentSlide2);
    }
}

function updateScrollbar() {
  scrollbar.style.width = (currentSlide2 + 1) / slidesLength * 100 + "%";
}

updateScrollbar();

prevBtn.addEventListener("click", prevCardSlide);
nextBtn.addEventListener("click", nextCardSlide);


//navbar toggle

let navToggle = document.getElementById("navToggle");
let navbarNav = document.getElementById("navbarNav");
let navbarHeight = navbarNav.scrollHeight;

navbarNav.style.height = '0px';
navToggle.addEventListener("click",function() {
  if (navbarNav.style.height === "0px") {
    navbarNav.style.height = navbarHeight + "px";
  } else {
    navbarNav.style.height = "0px";
  }
})