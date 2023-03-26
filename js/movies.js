"use strict"
let toggle = $('#reload').toggleClass('hidden')
let addRating = document.getElementById("added-movie")
let addTitle = document.getElementById('title-input');
let submitButton = document.querySelector('#submit-movie');
getList();


function getList() {
    $(document).ready(function () {
        $('#reload').show();
    })
    fetch(`https://just-cold-diver.glitch.me/movies`)
        .then(response => response.json())
        .then(movieList => {
            let html = "";

            for (let i = 0; i < movieList.length; i++) {
                html += `<div>`
                html += `<h1>${movieList[i].title}</h1>`
                html += `<h4>${movieList[i].rating}</h4>`
                html += `<h5>${movieList[i].genre}</h5>`
                html += `<button name="SaveChanges" class="saveThis" type="submit" value="${movieList[i].id}">Save Changes</button>`
                html += `<button name="Edit" class="editThis" type="submit" value="${movieList[i].id}">Edit Details</button>`
                html += `<button name="Delete" class="deleteThis" type="submit" value="${movieList[i].id}">Delete Movie</button>`
                html += `</div>`
                console.log(movieList);
            }
            $('#movieList').html(html);
            //      Hides loading image after movies displayed
            $('#reload').toggle('hidden')

            // delete button
            // $('.deleteThis').click(function () {
            //     deleteMovie($(this).val());
            // })
                // edit button
                $('.editThis').click(function () {
                    let editId = ($(this).val());
                    let title = $(this).parent().children('h1').first().html()
                    let rating = $(this).parent().children('h4').first().html()
                    $(this).parent().children('.saveThis').toggleClass('hidden')
                    $(this).toggleClass('hidden')
                    $(this).parent().children('h1').first().html(`<input type='text' value='${title}' class="editarea container-fluid">`);
                    $(this).parent().children('h4').first().html(editRating(rating));
                })
            // //
                     // // Save Changes Button
                    $(".saveThis").click(function () {
                        let titleArea = $('.editarea').val();
                        let selectedRating = $("#selector").val();
                        editMovie(editId, titleArea, selectedRating);
                    });
            //         //
                    // Edit Movie (Title) save changes on enter
                    $(".editarea").keyup(function (event) {
                        let keyStroke = event.key;
                        if (keyStroke === 'Enter') {
                            let textarea = $(this).val();
                            let selectedRating = $("#selector").val();
                            console.log(selectedRating);
                            editMovie(editId, textarea, selectedRating);
                        }

                    });
                    // Edit Movie (Rating) save changes on enter
            //         $(".ratingArea").keyup(function (event) {
            //             let keyStroke = event.key;
            //             if (keyStroke === 'Enter') {
            //                 let titleArea = $('.editarea').val();
            //                 let selectedRating = $("#selector").val();
            //                 editMovie(editId, titleArea, selectedRating);
            //             }
            //         });
            //     })
            // })

            function addMovie(name,rating) {
                // m.preventDefault();
                let movieObj = {
                    title: name,
                    rating: rating
                };

                // Fetch post to movies json
                fetch(`https://just-cold-diver.glitch.me/movies`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(movieObj),
                }).then(() => fetch(`https://just-cold-diver.glitch.me/movies`))
                    .then(resp => resp.json()).then(() => getList());
                let html = "";
                for (let i = 0; i < movieList.length; i++) {
                    html += `<div>`
                    html += `<h1>${movieList[i].title}</h1>`
                    html += `<h4>${movieList[i].rating}</h4>`
                    html += `<h5>${movieList[i].genre}</h5>`
                    html += `<button name="SaveChanges" class="saveThis" type="submit" value="${movieList[i].id}">Save Changes</button>`
                    html += `<button name="Edit" class="editThis" type="submit" value="${movieList[i].id}">Edit Details</button>`
                    html += `<button name="Delete" class="deleteThis" type="submit" value="${movieList[i].id}">Delete Movie</button>`
                    html += `</div>`
                    console.log(movieList);
                }
                $('#movieList').html(html);
            }


// Delete Movie list
            function deleteMovie(movieId) {
                fetch(`https://just-cold-diver.glitch.me/movies` + movieId, {
                    method: "DELETE"
                }).then(() => fetch(`https://just-cold-diver.glitch.me/movies`)).then(resp => resp.json()).then(() => getList());
            }

// Edit Movie List
            function editMovie(movieID, title, rating) {
                let editedMovie = {
                    title: title,
                    rating: rating,
                };
                fetch(`https://just-cold-diver.glitch.me/movies` + movieID, {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(editedMovie)
                })
                    .then(() => fetch(`https://just-cold-diver.glitch.me/movies`)).then(resp => resp.json()).then(() => getList());
            }

            submitButton.addEventListener('click', addMovie);

// Edit Rating Function
            function editRating(rating) {
                let html = ""
                if (rating == 1) {
                    html += `<select id="selector" class="form-select ratingArea" aria-label="Default select example">
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>`
                    return html;
                } else if (rating == 2) {
                    html += `<select id="selector" class="form-select ratingArea" aria-label="Default select example">
                    <option value="1">1</option>
                    <option selected value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>`
                    return html;
                } else if (rating == 3) {
                    html += `<select id="selector" class="form-select ratingArea" aria-label="Default select example">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option selected value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>`
                    return html;
                } else if (rating == 4) {
                    html += `<select id="selector" class="form-select ratingArea" aria-label="Default select example">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option selected value="4">4</option>
                    <option value="5">5</option>
                </select>`
                    return html;
                } else if (rating == 5) {
                    html += `<select id="selector" class="form-select ratingArea" aria-label="Default select example">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option selected value="5">5</option>
                </select>`
                    return html;
                }
            }
        })
}