document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("mode-popup");
    const quickView = document.getElementById("quick-view");
    const interactiveView = document.getElementById("interactive-view");
    const quickBtn = document.getElementById("quickViewBtn");
    const interactiveBtn = document.getElementById("interactiveBtn");

    const menuToggle = document.getElementById("menu-toggle");
    const sideMenu = document.getElementById("side-menu");
    const menuQuick = document.getElementById("menu-quick");
    const menuInteractive = document.getElementById("menu-interactive");

    // Hide menu toggle until user chooses a mode
    if (menuToggle) menuToggle.style.display = "none";

    // Load saved mode
    const savedMode = localStorage.getItem("viewMode");
    if (savedMode === "quick") {
        popup.style.display = "none";
        quickView.classList.remove("hidden");
        interactiveView.classList.add("hidden");
        if (menuToggle) menuToggle.style.display = "block";
    } else if (savedMode === "interactive") {
        popup.style.display = "none";
        interactiveView.classList.remove("hidden");
        quickView.classList.add("hidden");
        if (menuToggle) menuToggle.style.display = "block";
    }

    // Popup buttons
    quickBtn.addEventListener("click", () => {
        popup.style.display = "none";
        quickView.classList.remove("hidden");
        interactiveView.classList.add("hidden");
        localStorage.setItem("viewMode", "quick");
        if (menuToggle) menuToggle.style.display = "block";
        window.scrollTo(0, 0);
    });

    interactiveBtn.addEventListener("click", () => {
        popup.style.display = "none";
        interactiveView.classList.remove("hidden");
        quickView.classList.add("hidden");
        localStorage.setItem("viewMode", "interactive");
        if (menuToggle) menuToggle.style.display = "block";
        window.scrollTo(0, 0);
    });

    // Menu toggle
    if (menuToggle && sideMenu) {
        menuToggle.addEventListener("click", () => {
            sideMenu.classList.toggle("hidden");
        });
    }

    // Menu navigation
    if (menuQuick) {
        menuQuick.addEventListener("click", () => {
            quickView.classList.remove("hidden");
            interactiveView.classList.add("hidden");
            sideMenu.classList.add("hidden");
            localStorage.setItem("viewMode", "quick"); // SAVE
            window.scrollTo(0, 0);
        });
    }

    if (menuInteractive) {
        menuInteractive.addEventListener("click", () => {
            interactiveView.classList.remove("hidden");
            quickView.classList.add("hidden");
            sideMenu.classList.add("hidden");
            localStorage.setItem("viewMode", "interactive"); // SAVE
            window.scrollTo(0, 0);
        });
    }

    // Parallax background
    const background = interactiveView.querySelector(".background-water-interactive");
    if (background) {
        window.addEventListener("scroll", () => {
            background.style.transform = `translateY(${window.scrollY * 0.3}px)`;
        });
    }
});