 
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


document.addEventListener('DOMContentLoaded', function() {
    const membersScroll = document.querySelector('.members-scroll');
    const members = document.querySelectorAll('.member');
    const memberWidth = members[0].offsetWidth + 30; // Include margin
    const totalWidth = memberWidth * members.length;

    // Clone members and append to the end for seamless looping
    members.forEach(member => {
        const clone = member.cloneNode(true);
        membersScroll.appendChild(clone);
    });

    // Set the width of the scrolling container
    membersScroll.style.width = `${totalWidth * 2}px`;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Adjust for slower/faster scrolling

    function scrollMembers() {
        scrollPosition -= scrollSpeed;
        
        if (scrollPosition <= -totalWidth) {
            scrollPosition += totalWidth;
        }
        
        membersScroll.style.transform = `translateX(${scrollPosition}px)`;
        requestAnimationFrame(scrollMembers);
    }

    scrollMembers();
});



document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.event-slider');
    const items = slider.querySelectorAll('.event-item');
    const itemWidth = items[0].offsetWidth + 20; // 20 is the gap
    const itemsCount = items.length;
    
    // Clone all items and append them to the end
    for (let i = 0; i < itemsCount; i++) {
        const clone = items[i].cloneNode(true);
        slider.appendChild(clone);
    }

    let currentPosition = 0;
    const totalWidth = itemWidth * itemsCount;

    function slide() {
        currentPosition -= 0.5; // Adjust this value to change the speed
        if (currentPosition <= -totalWidth) {
            currentPosition = 0;
        }
        slider.style.transform = `translateX(${currentPosition}px)`;
        requestAnimationFrame(slide);
    }

    slide();
});
 
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.gallery-slider');
    const slides = document.querySelector('.gallery-slides');
    const slideWidth = slides.children[0].offsetWidth + 20;  
    const slidesCount = slides.children.length;
     
    for (let i = 0; i < slidesCount; i++) {
        const clone = slides.children[i].cloneNode(true);
        slides.appendChild(clone);
    }

    let currentPosition = 0;
    const totalWidth = slideWidth * slidesCount;

    function slide() {
        currentPosition -= 1;
        if (currentPosition <= -totalWidth) {
            currentPosition = 0;
        }
        slides.style.transform = `translateX(${currentPosition}px)`;
        requestAnimationFrame(slide);
    }

    slide();
});

 
function openLightbox(src) {
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("lightbox-img").src = src;
}
 
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

