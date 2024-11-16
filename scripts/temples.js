// Dynamic Footer (Year and Last Modified)
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
        const formattedLastModified = lastModifiedDate.toLocaleDateString(); // format based on user's locale
        lastModifiedElement.textContent = "Last modified: " + formattedLastModified;
    }

    // Hamburger Menu for Mobile Navigation
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("menu");

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("hidden");
        hamburger.textContent = hamburger.textContent === "☰" ? "✖" : "☰"; // Toggle between hamburger and "X"
    });
});
