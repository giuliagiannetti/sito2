let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

// Thumbnail image controls
function currentSlide(n) {
    slideIndex = n;
    showSlides(n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
} 



//PER COLONNA DESTRA

let slideIndexr = 1;
showSlidesr(slideIndexr);

// Next/previous controls
function plusSlidesr(m) {
    slideIndexr += m;
    showSlidesr(slideIndexr);
}

// Thumbnail image controls
function currentSlider(m) {
    slideIndexr = m;
    showSlidesr(m);
}

function showSlidesr(m) {
    let i;
    let slides = document.getElementsByClassName("mySlidesr");
    let dots = document.getElementsByClassName("dotr");
    if (m > slides.length) { slideIndexr = 1 }
    if (m < 1) { slideIndexr = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexr - 1].style.display = "block";
    dots[slideIndexr - 1].className += " active";
} 