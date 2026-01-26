document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("mode-popup");
    const quickView = document.getElementById("quick-view");
    const interactiveView = document.getElementById("interactive-view");
    const quickBtn = document.getElementById("quickViewBtn");
    const interactiveBtn = document.getElementById("interactiveBtn");

    // Load saved mode
    const savedMode = localStorage.getItem("viewMode");
    if (savedMode === "quick") {
        popup.style.display = "none";
        quickView.classList.remove("hidden");
    } else if (savedMode === "interactive") {
        popup.style.display = "none";
        interactiveView.classList.remove("hidden");
    }

    // Button listeners
    quickBtn.addEventListener("click", () => {
        popup.style.display = "none";
        quickView.classList.remove("hidden");
        localStorage.setItem("viewMode", "quick");
        window.scrollTo(0, 0);
    });

    interactiveBtn.addEventListener("click", () => {
        popup.style.display = "none";
        interactiveView.classList.remove("hidden");
        localStorage.setItem("viewMode", "interactive");
        window.scrollTo(0, 0);
    });

    // Interactive background parallax
    const background = interactiveView.querySelector(".background-water");
    if (background) {
        window.addEventListener("scroll", () => {
            const scrollY = window.scrollY;
            background.style.transform = `translateY(${scrollY * 0.3}px)`;
        });
    }
});