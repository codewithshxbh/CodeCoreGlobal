async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    resultDiv.innerHTML = "Please enter a city name.";
    return;
  }

  const apiKey = "YOUR_API_KEY_HERE";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    const weatherInfo = `
      <strong>City:</strong> ${data.name} <br/>
      <strong>Temperature:</strong> ${data.main.temp} °C <br/>
      <strong>Weather:</strong> ${data.weather[0].description} <br/>
      <strong>Humidity:</strong> ${data.main.humidity}% <br/>
      <strong>Wind Speed:</strong> ${data.wind.speed} m/s
    `;
    resultDiv.innerHTML = weatherInfo;
  } catch (error) {
    resultDiv.innerHTML = `Error: ${error.message}`;
  }
}
