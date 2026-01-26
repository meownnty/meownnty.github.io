const popup = document.getElementById("mode-popup");
const quickView = document.getElementById("quick-view");
const interactiveView = document.getElementById("interactive-view");

document.getElementById("quickViewBtn").addEventListener("click", () => {
    popup.style.display = "none";
    quickView.classList.remove("hidden");
});

document.getElementById("interactiveBtn").addEventListener("click", () => {
    popup.style.display = "none";
    interactiveView.classList.remove("hidden");
});
const savedMode = localStorage.getItem("viewMode");

if (savedMode === "quick") {
    popup.style.display = "none";
    quickView.classList.remove("hidden");
}

if (savedMode === "interactive") {
    popup.style.display = "none";
    interactiveView.classList.remove("hidden");
}

document.getElementById("quickViewBtn").addEventListener("click", () => {
    localStorage.setItem("viewMode", "quick");
});

document.getElementById("interactiveBtn").addEventListener("click", () => {
    localStorage.setItem("viewMode", "interactive");
});

const interactiveView = document.getElementById("interactive-view");
const background = interactiveView.querySelector(".background-water");

if (background) {
    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        background.style.transform = `translateY(${scrollY * 0.3}px)`;
    });
}
document.getElementById("interactiveBtn").addEventListener("click", () => {
    popup.style.display = "none";
    interactiveView.classList.remove("hidden");
    window.scrollTo(0, 0);
});