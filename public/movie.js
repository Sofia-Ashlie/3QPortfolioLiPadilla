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
    































