let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let menuicon = document.querySelector('#menu-icon');
let nav = document.querySelector('.navbar');
menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    nav.classList.toggle('active');
}
window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');
        if(top >= offset && top < height + offset) {
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menuicon.classList.remove('bx-x');
    nav.classList.remove('active');
}

ScrollReveal({
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .education-heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});

const typed = new Typed('.multiple-text', {
    strings: ['Student .', 'Problem Solver .', 'FullStack Web Developer .', 'Software Developer .'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});