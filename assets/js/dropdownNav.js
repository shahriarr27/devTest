
//navbar toggle

let navToggle = document.getElementById("navToggle");
let navbarNav = document.getElementById("navbarNav");
let navbarHeight = navbarNav.scrollHeight;

navbarNav.style.height = '0px';
navToggle.addEventListener("click",function() {
  if (navbarNav.style.height === "0px") {
    navbarNav.style.height = navbarHeight + "px";
    setTimeout(() => {
      navbarNav.classList.add("showing");
    }, 500);
  } else {
    navbarNav.style.height = "0px";
    navbarNav.classList.remove("showing");
  }
})

let dropdownlinks = document.querySelectorAll(".dropdown");

dropdownlinks.forEach(function(droplink){
  let dropdown = droplink.nextElementSibling;
  droplink.onmouseover = function() {
    dropdown.style.display = 'block';

    var linkPosition = droplink.getBoundingClientRect();
    if (linkPosition.right > 1400) {
        dropdown.style.left = "auto";
        dropdown.style.right = "0";
    }
  }
  droplink.onmouseout = function() {
    dropdown.style.display = 'none';
  }
  dropdown.onmouseover = function() {
    dropdown.style.display = 'block';
  }
  dropdown.onmouseout = function() {
    dropdown.style.display = 'none';
  }
})
