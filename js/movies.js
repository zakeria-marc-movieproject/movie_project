"use strict"
// function buildMovie(searchString) {
    let html=""
    fetch(`https://just-cold-diver.glitch.me/movies`)
        .then(response => response.json())
        .then(data=> {
            console.log(data)
            var moviesHTML = "";
            $.each(html, function (index, movie) {
                moviesHTML += "<div class='movie' data-id='" + movie.id + "'>";
                moviesHTML += "<h3>" + movie.title + "</h3>";
                moviesHTML += "<p>Rating: " + movie.rating + "</p>";
                moviesHTML += "<button class='edit-movie'>Edit</button>";
                moviesHTML += "<button class='delete-movie'>Delete</button>";
                moviesHTML += "</div>";
            });
            // Replace loading message with generated HTML
            $("#movies-list").html(moviesHTML);
        })
// error: function() {
//     $("#movies-list").html("Error loading movies.");
// }

            // function displayMovies() {
            //     moviesContainer.innerHTML = '';
            //     movies.forEach(movie => {
            //         const movieDiv = document.createElement('div');
            //         const titleParagraph = document.createElement('p');
            //         const ratingParagraph = document.createElement('p');
            //         const editButton = document.createElement('button');
            //         const deleteButton = document.createElement('button');
            //         titleParagraph.innerText = movie.title;
            //         ratingParagraph.innerText = `Rating: ${movie.rating}`;
            //         editButton.innerText = 'Edit';
            //         deleteButton.innerText = 'Delete';
            //         editButton.addEventListener('click', () => {
            //             editMovieForm.elements.id.value = movie.id;
            //             html += `<h4>Movie title: ${data.list[23].title}</h4>`;
            //             $("#movie-list").html(html);
            //
            //         })






// html += `<h4>Current location: ${data.name}</h4>`;
// html += `<h4>Current weather: ${data.weather[0].description}</h4>`;
// html += `<h5>Current average wind speed: ${parseInt(data.wind.speed)} knots</h5>`;
// html += `<h5>Current Temperature: ${parseInt(data.main.temp)} &deg;</h5>`;
// html += `<h5>Current humidity: ${parseInt(data.main.humidity)}</h5>`;
// $("#day1").html(html);

      //   const movieList = document.getElementById('movie-list');
      //   movieList.innerHTML = '';
      // data.forEach(movie => {
      //     const movieElement = document.createElement('div');
      //     movieElement.classList.add('movie');
      //     movieElement.innerHTML = `
      //    <h2>${movie.title}</h2>
      //       <p>${movie.description}</p>
      //       <img src="${movie.poster}" alt="${movie.title}">`;
      //
      //     movieList.appendChild(movieElement);
      // });

// $(document).ready(function() {
//     // Display loading message
//     $("#movies-list").html("Loading...");
//     // Make AJAX request to get list of movies
//     $.ajax({
//         type: "GET",
//         url: "/movies",
//         success: function(movies) {
            // Generate HTML from JSON response
        //     var moviesHTML = "";
        //     $.each(movies, function(index, movie) {
        //         moviesHTML += "<div class='movie' data-id='" + movie.id + "'>";
        //         moviesHTML += "<h3>" + movie.title + "</h3>";
        //         moviesHTML += "<p>Rating: " + movie.rating + "</p>";
        //         moviesHTML += "<button class='edit-movie'>Edit</button>";
        //         moviesHTML += "<button class='delete-movie'>Delete</button>";
        //         moviesHTML += "</div>";
        //     });
        //     // Replace loading message with generated HTML
        //     $("#movies-list").html(moviesHTML);
        // }
        // error: function() {
        //     $("#movies-list").html("Error loading movies.");
        // }
