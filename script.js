 
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');

    if (window.scrollY > 50) {
        header.classList.add('scrolled');   
        header.classList.remove('transparent');
    } else {
        header.classList.add('transparent');   
        header.classList.remove('scrolled');
    }
});
 

const slider = document.querySelector('.gallery-slider');
const slides = document.querySelector('.gallery-slides');

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;

 
const images = document.querySelectorAll('.gallery-slides img');
images.forEach(img => img.addEventListener('dragstart', e => e.preventDefault()));
 
slider.addEventListener('mousedown', dragStart);
slider.addEventListener('touchstart', dragStart);

slider.addEventListener('mousemove', dragMove);
slider.addEventListener('touchmove', dragMove);

slider.addEventListener('mouseup', dragEnd);
slider.addEventListener('mouseleave', dragEnd);
slider.addEventListener('touchend', dragEnd);

function dragStart(event) {
    isDragging = true;
    startPos = getPositionX(event);
    slider.style.cursor = 'grabbing';
}

function dragMove(event) {
    if (!isDragging) return;
    const currentPosition = getPositionX(event);
    currentTranslate = prevTranslate + currentPosition - startPos;
    setSliderPosition();
}

function dragEnd() {
    isDragging = false;
    slider.style.cursor = 'grab';
    prevTranslate = currentTranslate;
}

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function setSliderPosition() {
    slides.style.transform = `translateX(${currentTranslate}px)`;
}


// Open the lightbox
function openLightbox(src) {
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("lightbox-img").src = src;
}

// Close the lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

