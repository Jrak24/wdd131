// Function to get a random number
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Function to shuffle and display a random selection of countries
function displayRandomCountries() {
    const countriesList = document.getElementById('countries-list');
    const countryItems = Array.from(countriesList.getElementsByClassName('country-item'));

    // Shuffle the country items
    for (let i = countryItems.length - 1; i > 0; i--) {
        const j = getRandomInt(i + 1);
        [countryItems[i], countryItems[j]] = [countryItems[j], countryItems[i]];
    }

    // Clear the list and display a random selection of countries (e.g., 5 countries)
    countriesList.innerHTML = ''; // Clear the current list
    const randomCountries = countryItems.slice(0, 5); // Take the first 5 after shuffle

    randomCountries.forEach(item => {
        countriesList.appendChild(item); // Add back the shuffled items
    });
}

// Save visited country to localStorage
function saveVisitedCountry(countryName) {
    let visitedCountries = JSON.parse(localStorage.getItem('visitedCountries')) || [];
    if (!visitedCountries.includes(countryName)) {
        visitedCountries.push(countryName);
        localStorage.setItem('visitedCountries', JSON.stringify(visitedCountries));
    }
}

// Display visited countries
function displayVisitedCountries() {
    let visitedCountries = JSON.parse(localStorage.getItem('visitedCountries')) || [];
    const visitedList = document.getElementById('visited-countries-list');
    
    visitedCountries.forEach(country => {
        const listItem = document.createElement('li');
        listItem.textContent = country;
        visitedList.appendChild(listItem);
    });
}

// Example usage: Call saveVisitedCountry when the user visits a country page
saveVisitedCountry('France');  // This should be called dynamically on each country page

// Display visited countries on the homepage
document.addEventListener('DOMContentLoaded', displayVisitedCountries);


// Run the function to display the random countries on page load
window.onload = displayRandomCountries;
