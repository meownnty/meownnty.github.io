// Grab the background div
const background = document.querySelector(".background-water");

// Listen for scrolling
window.addEventListener("scroll", () => {
    // Get how much the page has scrolled
    const scrollY = window.scrollY;

    // Move the background slower than scroll for parallax effect
    background.style.transform = `translateY(${scrollY * 0.3}px)`;
});