const scroll_indicator = document.getElementById("scroll-indicator");

window.addEventListener("scroll", function() {
    const maxScrollHeight = document.body.scrollHeight - window.innerHeight;

    const currentScrollHeight = (window.scrollY / maxScrollHeight) * 100;
    scroll_indicator.style.width = `${currentScrollHeight}%`;
});

/* scroll reveal */

window.sr = ScrollReveal({
    reset: true,
});

sr.reveal(".hero .intro", {
    duration: 2000,
    origin: "left",
    distance: "200px",
});

sr.reveal(".hero .image", {
    duration: 2000,
    origin: "right",
    distance: "200px",
});

// about
sr.reveal(".about .intro", {
    duration: 2000,
    origin: "right",
    distance: "200px",
});

sr.reveal(".about .img", {
    duration: 2000,
    origin: "left",
    distance: "200px",
    rotate: {
        x: 60,
        y: 45,
    },
});

/* logo */
sr.reveal(".logo .intro", {
    duration: 2000,
    origin: "top",
    distance: "200px",
});

sr.reveal(".logo .img", {
    duration: 2000,
    origin: "bottom",
    distance: "200px",
});

// Brand
sr.reveal(".Brand .intro", {
    duration: 2000,
    origin: "bottom",
    distance: "200px",
});

sr.reveal(".Brand .img", {
    duration: 2000,
    origin: "top",
    distance: "200px",
});

sr.reveal(".Strella .intro", {
    duration: 2000,
    origin: "left",
    distance: "200px",
});

sr.reveal(".Strella .img", {
    duration: 2000,
    origin: "right",
    distance: "200px",
});