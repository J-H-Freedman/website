const images = document.getElementsByClassName("gallery-images");
var count = 1;
var imageCount = document.getElementById(count);

function refreshImage() {
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    imageCount.style.display = "block";
}

function previousImage() {
    count--;
    refreshImage();
    if (count < 1) {
        count = images.length
    }
}

function nextImage() {
    count++;
    refreshImage();
    if (count > images.length) {
        count = 1
    }
}