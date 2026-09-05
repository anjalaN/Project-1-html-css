const slides = document.querySelectorAll(".hero img");

let currentSlide = 0;

slides[currentSlide].style.display = "block";

function nextSlide() {
    slides[currentSlide].style.display = "none";

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].style.display = "block";
}

setInterval(nextSlide, 100);