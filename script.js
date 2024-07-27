let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
    ditance: '50px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:350, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'down'});

sr.reveal('.container h6', {delay:150, origin: 'left'});
sr.reveal('.container h3', {delay:250, origin: 'right'});
sr.reveal('.container h1', {delay:400, origin: 'top'});
sr.reveal('.container p', {delay:550, origin: 'left'});
sr.reveal('.main-btnn ', {delay:650, origin: 'bottom'});
sr.reveal('.social', {delay:850, origin: 'right'});
