// Preload images
const images = ['image1.jpg', 'image2.jpg'];
images.forEach(imageSrc => {
    const img = new Image();
    img.src = imageSrc;
});
// JavaScript code for slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active-slide');
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].classList.add('active-slide');
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

const textChangeElement = document.getElementById('text-change');
const textOptions = ['cook?', 'maid?', 'nanny?'];
let textIndex = 0;

function changeText() {
    textChangeElement.textContent = textOptions[textIndex];
    textIndex = (textIndex + 1) % textOptions.length;
}

setInterval(changeText, 2000); // Change text every 2 seconds
