"use strict"
function buildMovie(searchString) {
    let html=""
    fetch(`https://just-cold-diver.glitch.me/movies`)
        .then(response => response.json())
        .then(data=> {
            console.log(data)

        })
}

// html += `<h4>Current location: ${data.name}</h4>`;
// html += `<h4>Current weather: ${data.weather[0].description}</h4>`;
// html += `<h5>Current average wind speed: ${parseInt(data.wind.speed)} knots</h5>`;
// html += `<h5>Current Temperature: ${parseInt(data.main.temp)} &deg;</h5>`;
// html += `<h5>Current humidity: ${parseInt(data.main.humidity)}</h5>`;
// $("#day1").html(html);
//const movieList = document.getElementById('movie-list');
//       movieList.innerHTML = '';
//
//       data.forEach(movie => {
//           const movieElement = document.createElement('div');
//           movieElement.classList.add('movie');
//           movieElement.innerHTML = `
//   <h2>${movie.title}</h2>
//   <p>${movie.description}</p>
//   <img src="${movie.poster}" alt="${movie.title}">
// `;
//           movieList.appendChild(movieElement);
//       });