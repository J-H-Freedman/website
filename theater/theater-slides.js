const images = document.getElementsByClassName("gallery-images");
let count = 1;

document.getElementById(count).style.display = "flex";

function refreshImage() {
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }

    if (count < 1) {
        count = images.length;
    }else if (count > images.length) {
        count = 1;
    }

    let imageCount = document.getElementById(count);
    imageCount.style.display = "flex";
}

function previousImage() {
    count--;
    refreshImage();
}

function nextImage() {
    count++;
    refreshImage();
}

function shortcut(e) {
    if (e.which === 37){
        previousImage();
    }

    if (e.which === 39) {
        nextImage();
    }
}

document.addEventListener("keyup", shortcut, false);