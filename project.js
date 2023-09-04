// Element Select
const form = document.getElementById("film-form")
const titleElement = document.querySelector("#title")
const directorElement = document.querySelector("#director")
const urlElement = document.querySelector("#url")
const cardBodyScn = document.querySelectorAll(".card-body")[1]
const clear = document.getElementById("clear-films")

// Initializing UI Object
const ui = new UI()

// Initializing Storage Object
const storage = new Storage()


// All Events 
eventListeners()

function eventListeners(){
    form.addEventListener("submit",addMovie)

    // Adding Movies from Storage to UI (Page Loaded)
    document.addEventListener("DOMContentLoaded",function(){
        let movies = storage.getMoviesFromStorage()
        ui.loadAllMovies(movies)
    })

    // Deleting the Movie by Click the Button
    cardBodyScn.addEventListener("click",deleteMovieBtn)

    // Deleting All Movies by Click Button
    clear.addEventListener("click",clearAllMovies)
}

// Add Movie Function
function addMovie(e){
    const title = titleElement.value
    const director = directorElement.value
    const url = urlElement.value

    if(title === "" || director === "" || url === ""){
        ui.dispalyMessages("Fill in all fields....","danger")
    }
    else {
        // New Movie
        const newMovie = new Movie(title,director,url)
        
        // Add Movie to UI
        ui.addMovieToUI(newMovie)

        // Add Movie to Storage
        storage.addMovieToStorage(newMovie)

        ui.dispalyMessages("Movie added successfully....","success")
    }

    ui.clearInputs(titleElement,urlElement,directorElement)

    e.preventDefault()
}

// Delete Movie Function
function deleteMovieBtn(e){
    if(e.target.id === "delete-movie"){
        ui.deleteMovieFromUI(e.target)

        // Delete Movie from Storage
        storage.deleteMovieFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        
        ui.dispalyMessages("Movie delete succssfully....","success")
    }
}

// Delete All Movie Function
function clearAllMovies(){
    if(confirm("Are you sure?")){
        ui.clearAllMoviesFromUI()
        storage.clearAllMoviesFromStorage()
    }
   
}