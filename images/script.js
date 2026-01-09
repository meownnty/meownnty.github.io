const background = document.querySelector(".background-water");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Parallax effect: slower than scrolling
    background.style.backgroundPosition = `center ${scrollY * 0.3}px`;
});