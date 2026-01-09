const background = document.querySelector(".background-water");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Background moves slightly slower than scroll
    background.style.transform = `translateY(${scrollY * 0.3}px)`;
});