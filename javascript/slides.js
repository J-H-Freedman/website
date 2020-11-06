//SLIDES

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

// GET TOUCHSCREEN SWIPE X

//x0 position to calculate Δx
function x0(e) {
    return e.clientX;
}
//x1 position to calculate Δx
function x1(e) {
    return e.clientX;
}
// calculate Δx
let deltaX = x0() - x1();

// SHORTCUT NAVIGATION

function shortcut(e) {
    //arrow key left or swipe left
    if (e.which === 37 || deltaX < -100){
        previousSlide();
    }
    //arrow key right or swipe right
    if (e.which === 39 || deltaX > 100) {
        nextSlide();
    }

}

//Event listeners for shortcuts
document.addEventListener("keyup", shortcut, false);
document.addEventListener('touchstart', x0, false);
document.addEventListener('touchend', x1, false);