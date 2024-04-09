document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const location = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            document.getElementById('location').innerText = `Location: ${location}`;
            document.getElementById('temperature').innerText = `Temperature: ${temperature}°C`;
            document.getElementById('description').innerText = `Description: ${description}`;
        })
        .catch(error => console.log('Error fetching weather data:', error));
});

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
  params: {city: 'Seattle'},
  headers: {
    'X-RapidAPI-Key': 'e8b94c90b9mshf95ba2ad426bc98p1afe58jsna9529bea4849',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}



// const apiKey
// const apiUrl
// fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//         const location = data.name;
//         const temperature = data.main.temp;
//         const description = data.weather[0].description;

//         document.getElementById('location').innerText = `Location: ${location}`;
//         document.getElementById('temperature').innerText = `Temperature: ${temperature}°C`;
//         document.getElementById('description').innerText = `Description: ${description}`;
//     })
//     .catch(error => console.log('Error fetching weather data:', error));
// This code snippet fetches weather data from the OpenWeatherMap API and displays the location, temperature, and description on the webpage.

// axios for weather data
// Axios is a popular HTTP client for making requests in JavaScript. It is promise-based and can be used in both the browser and Node.js. Here's an example of how you can use axios to get weather data from an API:

// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
//   params: {city: 'Seattle'},
//   headers: {
//     'X-RapidAPI-Key': 'e8b94c90b9mshf95ba2ad426bc98p1afe58jsna9529bea4849',
//     'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//   }
// };

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// }
// catch (error) {
//   console.error(error);
// }

// const apiKey = 'your-api-key';
// const city = 'New York';
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

// fetch(apiUrl)
//   .then(response => response.json())
//   .then(data => {
//     // Extract relevant weather information from API response
//     const temperature = data.main.temp;
//     const humidity = data.main.humidity;
//     const windSpeed = data.wind.speed;
    
//     // Update UI with weather information
//     displayWeather(temperature, humidity, windSpeed);
//   })
//   .catch(error => {
//     console.error('Error fetching weather data:', error);
//   });

// function displayWeather(temperature, humidity, windSpeed) {
//   // Display weather information on the webpage

//   // Update UI elements with weather information
//   // For example, set text content of HTML elements
// }