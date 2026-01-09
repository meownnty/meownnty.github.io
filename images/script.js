const background = document.querySelector(".background-water");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Move background slower than content
    background.style.backgroundPosition = `center ${scrollY * 0.3}px`;
});