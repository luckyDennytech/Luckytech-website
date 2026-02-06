// Smooth Scrolling for internal links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


// Highlight Active Nav Link on Scroll

const sections = document.querySelectorAll('section, header');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});


// Modal functionality for profile icon

const modal = document.getElementById('image-modal');
const img = document.getElementById('profile-icon');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');

img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside the image

modal.onclick = function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
}