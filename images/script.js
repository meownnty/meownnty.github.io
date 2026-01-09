const background = document.querySelector(".background-water");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // move background down slightly slower than scroll
    background.style.backgroundPosition = `center ${scrollY * 0.5}px`;
});