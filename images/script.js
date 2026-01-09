// Grab the background div
const background = document.querySelector(".background-water");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    background.style.top = `${-scrollY * 0.3}px`; // move it up as we scroll
});
