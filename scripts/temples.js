document.addEventListener("DOMContentLoaded", () => {
    // Set current year
    const currentYearElement = document.getElementById("currentyear");
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Set last modified date
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        const lastModifiedDate = new Date(document.lastModified);
        const formattedLastModified = lastModifiedDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            weekday: "long"
        });
        lastModifiedElement.textContent = "Last modified: " + formattedLastModified;
    }

    // Hamburger Menu for Mobile Navigation
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    if (hamburger && menu) {
        hamburger.addEventListener("click", () => {
            const isOpen = menu.classList.toggle("hidden");
            hamburger.textContent = isOpen ? "☰" : "✖"; // Toggle between hamburger and "X"
            hamburger.setAttribute("aria-expanded", !isOpen); // Toggle aria-expanded attribute
        });
    }
});
