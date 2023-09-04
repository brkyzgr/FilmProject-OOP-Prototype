// UI Constructor
function UI(){

}
UI.prototype.addMovieToUI = function(newMovie){
    const movieList = document.getElementById("films")

    // Movie HTML Structure
    movieList.innerHTML += `
        <tr>
            <td><img src="${newMovie.url}" class="img-fluid img-thumbnail"></td>
            <td>${newMovie.title}</td>
            <td>${newMovie.director}</td>
            <td><a href="#" id = "delete-movie" class = "btn btn-danger">Delete Movie</a></td>
        </tr>
    `
}

// Clear Inputs
UI.prototype.clearInputs = function(element1,element2,element3){
    element1.value = ""
    element2.value = ""
    element3.value = ""
}

// Alert Message
UI.prototype.dispalyMessages = function(message,type){
    const cardBody = document.querySelectorAll(".card-body")[0];
    
    // Alert div Structure
    const div = document.createElement("div");

    div.className = `alert alert-${type}`
    div.textContent = message;

    cardBody.appendChild(div)

    setTimeout(function(){
        div.remove();
    },2000)
}

// Load All Movies from Storage
UI.prototype.loadAllMovies = function(movies){
    const movieList = document.getElementById("films")
    movies.forEach(function(movie){
        movieList.innerHTML += `
            <tr>
                <td><img src="${movie.url}" class="img-fluid img-thumbnail"></td>
                <td>${movie.title}</td>
                <td>${movie.director}</td>
                <td><a href="#" id = "delete-movie" class = "btn btn-danger">Delete Movie</a></td>
            </tr>
        `
    });
}

// Delete Movie from UI
UI.prototype.deleteMovieFromUI = function(element){
    element.parentElement.parentElement.remove()
}

// Delete All Fmovies from UI
UI.prototype.clearAllMoviesFromUI = function(){
    const movieList = document.getElementById("films")
    while(movieList.firstElementChild !== null) {
        movieList.firstElementChild.remove()
    }
}