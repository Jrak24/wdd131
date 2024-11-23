document.addEventListener("DOMContentLoaded", function () {
    // Set current year in footer
    const currentYearElement = document.getElementById("currentyear");
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Set last modified date in footer
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        const lastModifiedDate = new Date(document.lastModified);
        lastModifiedElement.textContent = lastModifiedDate.toLocaleDateString();
    }

    // Calculate Wind Chill Function
    function calculateWindChill(temperature, windSpeed) {
        if (temperature <= 10 && windSpeed > 4.8) {
            const windChill = 13.12 + 0.6215 * temperature -  11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
            return windChill.toFixed(1);
        }
        return "N/A"; // If conditions are not met, return N/A
    }

    // Static weather data (as an example)
    const temperature = -10; // Example Temperature in °C
    const windSpeed = 15;    // Example Wind Speed in km/h

    // Display Wind Chill on the page
    const windChill = calculateWindChill(temperature, windSpeed);
    const windChillElement = document.getElementById("windchill");
    if (windChillElement) {
        windChillElement.textContent = windChill;
    }

    // Set weather data on the page
    const temperatureElement = document.getElementById("temperature");
    if (temperatureElement) {
        temperatureElement.textContent = `${temperature}°C`;
    }
    const windSpeedElement = document.getElementById("windspeed");
    if (windSpeedElement) {
        windSpeedElement.textContent = `${windSpeed} km/h`;
    }
});
