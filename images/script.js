const background = document.querySelector(".background-water");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    // parallax: move background slower than content
    background.style.transform = `translateY(${scrollY * 0.3}px)`;
});