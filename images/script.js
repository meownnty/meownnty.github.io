window.addEventListener("scroll", () => {
    document.documentElement.style.setProperty(
        "--scroll",
        window.scrollY + "px"
    );
});