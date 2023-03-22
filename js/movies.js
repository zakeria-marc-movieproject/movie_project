"use strict"


function getList() {
    let movieList =document.getElementById('movieList')
    fetch(`https://just-cold-diver.glitch.me/movies`)
        .then(response => response.json())
        .then(data=> {
            console.log(data)
            let html = "";
            for (i = 0; i < data.length; i++) {
                html += `<div>`
                html += `<h2>${data[i].title}</h2>`
                html += `<h5>${data[i].rating}</h5>`
                html += `<button name="SaveChanges" class="saveThis hidden container-fluid" type="submit" value="${data[i].id}">Save Changes</button>`
                html += `<button name="Edit" class="editThis container-fluid" type="submit" value="${data[i].id}">Edit Details</button>`
                html += `<button name="Delete" class="deletethis container-fluid" type="submit" value="${data[i].id}">Delete Movie</button>`
                html += `</div>`
            }
            movieList.innerHTML = html;
            // delete button
            $('.deletethis').click(function () {
                deleteMovie($(this).val());
            })
        } )
}