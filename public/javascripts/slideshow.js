let slideIndex = 1;
showSlides(slideIndex);

let slideIndex2 = 1;
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function plusSlides2(k) {
    showSlides2(slideIndex2 += k);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function currentSlide2(k) {
    showSlides2(slideIndex2 = k);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
}


function showSlides2(k) {
    let j;
    let slides2 = document.getElementsByClassName("umOkkurImage");
    let dots = document.getElementsByClassName("dot");
    if (k > slides2.length) {slideIndex2 = 1}
    if (k < 1) {slideIndex2 = slides2.length}
    for (j = 0; j < slides2.length; j++) {
        if(screen.width <= 600) {
            slides2[j].style.display = "none";
        }
    }
    for (j = 0; j < dots.length; j++) {
        dots[j].className = dots[j].className.replace(" active", "");
    }
    if(screen.width <= 600) {
        slides2[slideIndex2-1].style.display = "block";
    }


}