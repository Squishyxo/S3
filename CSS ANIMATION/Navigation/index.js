let btn = document.querySelector('.btn');
let overlay = document.querySelector('.overlay');
let overlay2 = document.querySelector('.overlay2');
let nav = document.querySelector('nav');

btn.addEventListener('click', (e) => {
    btn.classList.toggle('active');
    overlay.classList.toggle('active');
    overlay2.classList.toggle('active');
    nav.classList.toggle('active');
    e.preventDefault();
})
let clientX = -100;
let clientY = -100;
const innerCursor = document.querySelector('#cursor');

const initCursor = () => {
    document.addEventListener('mousemove', (e) => {
        clientX = e.clientX - 5;
        clientY = e.clientY - 5;
    });
    const render = () => {
        innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;

        requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
};

initCursor();