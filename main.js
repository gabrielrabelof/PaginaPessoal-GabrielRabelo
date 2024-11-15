const nav = document.getElementById('nav')
const navLinks = document.querySelector('.nav-links')
const navLink = document.querySelectorAll('.nav-links a');
const menu = document.getElementById('menu');
const sections = document.querySelectorAll('section');


window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        nav.classList.add('scrolled')
    } else {
        nav.classList.remove('scrolled')
    }

    const scrollPosition = window.scrollY + 500;

    sections.forEach(section => {
        if (scrollPosition >= section.offsetTop && 
            scrollPosition < section.offsetTop + section.offsetHeight) {

            navLink.forEach(link => {
                link.classList.remove('selected');
            });

            document.querySelector(`.nav-links a[href="#${section.id}"]`).classList.add('selected');
        }
    });
});

navLink.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); 

    const targetId = link.getAttribute('href').substring(1);

    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({
        behavior: "smooth"
    });

    nav.classList.remove('open');
    navLinks.classList.remove('open');
    menu.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});

menu.addEventListener('click', () => { 
    nav.classList.toggle('open')
    navLinks.classList.toggle('open')
    menu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 1280) {
        nav.classList.remove('open');
        navLinks.classList.remove('open');
        menu.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
});
