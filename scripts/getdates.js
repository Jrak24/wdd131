// Get the current year and set it to the #currentyear span
const currentYearElement = document.getElementById("currentyear");
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Get the last modified date and format it to a more readable format
const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
    const lastModifiedDate = new Date(document.lastModified);
    const formattedLastModified = lastModifiedDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });  // Custom format: e.g., "November 16, 2024"
    lastModifiedElement.textContent = "Last modified: " + formattedLastModified;
}
