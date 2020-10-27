// Read slides
const slides = document.getElementsByClassName("slide");

// Start at slide 1
let count = 1;

// Render first slide
document.getElementById(count).style.display = "flex";

// Refresh slide
function refreshSlide() {
    // 1: hide all images
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // 1a: loop around
    if (count < 1) {
        count = slides.length;
    }else if (count > slides.length) {
        count = 1;
    }
    // 2: Render the current slide
    let SlideCount = document.getElementById(count);
    SlideCount.style.display = "flex";
}

// Previous slide
function previousSlide() {
    count--;
    refreshSlide();
}

// Next slide
function nextSlide() {
    count++;
    refreshSlide();
}

// <- and -> keys for navigation
function shortcut(e) {
    if (e.which === 37){
        previousSlide();
    }

    if (e.which === 39) {
        nextSlide();
    }
}
document.addEventListener("keyup", shortcut, false);