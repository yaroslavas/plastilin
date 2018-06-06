$('.slick-slaider').slick();



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}




function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    var arrows = document.getElementsByClassName("dottitle");
    var animates = document.getElementsByClassName("animate");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    for (i = 0; i < arrows.length; i++) {
        arrows[i].className = arrows[i].className.replace(" activetitle", "");
    }
    for (i = 0; i < animates.length; i++) {
        animates[i].className = animates[i].className.replace(" animateactive", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    arrows[slideIndex - 1].className += " activetitle";
    animates[slideIndex - 1].className += " animateactive";
}