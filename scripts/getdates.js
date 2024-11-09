// Get the current year and set it to the #currentyear span
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Get the last modified date and set it to the #lastModified paragraph
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;
