const background = document.querySelector(".background-water");
const img = new Image();
img.src = "images/background.jpeg";
img.onload = () => {
    const imageHeight = img.height;
    // Set div height to match image
    background.style.height = `${imageHeight}px`;
};

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    background.style.backgroundPosition = `center ${scrollY * 0.5}px`;
});