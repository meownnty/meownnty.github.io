const background = document.querySelector(".background-water");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    // Move background slightly slower than content for parallax
    background.style.transform = `translateY(${scrollY * 0.3}px)`;
});