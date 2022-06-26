//Nav Bar show on scroll up
{
    const nav = document.querySelector(".nav");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        if (lastScrollY < window.scrollY){
            nav.classList.add("nav--hidden");
            console.log('We are going down');
        } else {
            nav.classList.remove("nav--hidden");
            console.log('We are going up');
        }
        if(window.scrollY === 0) {
            nav.classList.add("nav--top");
        } else {
            nav.classList.remove("nav--top");
        }

        lastScrollY = window.scrollY;
    })
}


// Slideshow 
var slideIndex = 1;
showSlides(slideIndex);


// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
