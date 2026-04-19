//Add movie
const loginForm = document.getElementById("Add");

function addMovie(event) {
            event.preventDefault();

        const newMovie = {
        title: document.getElementById('Title').value,
        year: document.getElementById('Year').value,
        genre: document.getElementById('Genre').value
    };

          let movies = JSON.parse(localStorage.getItem('movies')) || [];
          movies.push(newMovie);

          localStorage.setItem('movies', JSON.stringify(movies));
        
        loginForm.reset();
        displayData();

        }
        function displayData() {
            const listArea = document.getElementById('movieList');
            const movies = JSON.parse(localStorage.getItem('movies')) || [];

            listArea.innerHTML = "";

            movies.forEach((movie, index) => {
            listArea.innerHTML += `
                <div class="movie-item">
                    <p>${index + 1}: ${movie.title} (${movie.year}) - ${movie.genre}</p>
                </div>
            `;
            });
        }

        loginForm.addEventListener("submit", addMovie);
        displayData();
    
    //2nd Graded: Update
    function addMovie(event) {
        event.preventDefault();
        
        const titleInput = document.getElementById('Title').value;
        const yearInput = document.getElementById('Year').value;
        const genreInput = document.getElementById('Genre').value;

        let movies = JSON.parse(localStorage.getItem('movies')) || [];

        //Finds index of the inputted movie title and removes case-sensitivity
        const existingMovieIndex = movies.findIndex(
            movie => movie.title.toLowerCase() === titleInput.toLowerCase() 
        );

        //If user inputs the same title:
        if (existingMovieIndex !== -1) {
            // Update year and genre
            movies[existingMovieIndex].year = yearInput;
            movies[existingMovieIndex].genre = genreInput;
        } 

        // Save and refresh
        localStorage.setItem('movies', JSON.stringify(movies));
        loginForm.reset();
        displayData();
}































