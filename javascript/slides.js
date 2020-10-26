const slides = document.getElementsByClassName("slide");
let count = 1;

document.getElementById(count).style.display = "flex";

function refreshSlide() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    if (count < 1) {
        count = slides.length;
    }else if (count > slides.length) {
        count = 1;
    }

    let SlideCount = document.getElementById(count);
    SlideCount.style.display = "flex";
}

function previousSlide() {
    count--;
    refreshSlide();
}

function nextSlide() {
    count++;
    refreshSlide();
}

function shortcut(e) {
    if (e.which === 37){
        previousSlide();
    }

    if (e.which === 39) {
        nextSlide();
    }
}

document.addEventListener("keyup", shortcut, false);