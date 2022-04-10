let btn = document.querySelector('.btn');
let nav = document.querySelector('#side-bar');
let dark = document.querySelector('#dark-mode');
let light = document.querySelector('#light-mode');

btn.addEventListener('click', (e) => {
    btn.classList.toggle('active');
    nav.classList.toggle('active');
    e.preventDefault();
})
dark.addEventListener('click', (e) => {
    e.target.style.display = 'none';
    document.getElementById('light-mode').style.display = 'block';
    document.documentElement.style.setProperty('--primary-color', '#1A1A1A');
    document.documentElement.style.setProperty('--secondary-color', '#fff');
    document.documentElement.style.setProperty('--third-color', '#1A1A1A');
})
light.addEventListener('click', (e) => {
    e.target.style.display = 'none';
    document.getElementById('dark-mode').style.display = 'block';
    document.documentElement.style.setProperty('--primary-color', '#fff');
    document.documentElement.style.setProperty('--secondary-color', 'black');
    document.documentElement.style.setProperty('--third-color', '#fff');
})