// Temple data array
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    // Add additional temple objects...
  ];
  
  // Generate temple cards dynamically
  function generateTempleCards(temples) {
    const container = document.getElementById("temple-container");
    container.innerHTML = ""; // Clear the container before rendering new data
  
    temples.forEach(temple => {
      const templeCard = document.createElement("div");
      templeCard.classList.add("temple-card");
  
      templeCard.innerHTML = `
        <h2>${temple.templeName}</h2>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area} sq ft</p>
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      `;
      
      container.appendChild(templeCard);
    });
  }
  
  // Filtering functions
  function filterTemples(criteria) {
    let filteredTemples;
  
    switch (criteria) {
      case "old":
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
        break;
      case "new":
        filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
        break;
      case "large":
        filteredTemples = temples.filter(temple => temple.area > 90000);
        break;
      case "small":
        filteredTemples = temples.filter(temple => temple.area < 10000);
        break;
      default:
        filteredTemples = temples;
        break;
    }
  
    generateTempleCards(filteredTemples);
  }
  
  // Event listeners for menu items
  document.getElementById("home").addEventListener("click", () => filterTemples("all"));
  document.getElementById("old").addEventListener("click", () => filterTemples("old"));
  document.getElementById("new").addEventListener("click", () => filterTemples("new"));
  document.getElementById("large").addEventListener("click", () => filterTemples("large"));
  document.getElementById("small").addEventListener("click", () => filterTemples("small"));
  
  // Display the current year and last modified date
  document.getElementById("current-year").textContent = new Date().getFullYear();
  document.getElementById("last-modified").textContent = document.lastModified;
  
  // Initialize with all temples
  generateTempleCards(temples);
  