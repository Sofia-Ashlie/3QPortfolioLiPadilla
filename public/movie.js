const loginForm = document.getElementById("Add");
const inputTitle = document.getElementById("Title");
const inputYear = document.getElementById("Year");
const inputGenre = document.getElementById("Genre");

function addMovie(event) {
            event.preventDefault();
            const title = document.getElementById('Title').value;
            const year = document.getElementById('Year').value;
            const genre = document.getElementById('Genre').value;

            localStorage.setItem('Title', title);
            localStorage.setItem('Year', year);
            localStorage.setItem('Genre', genre);

            displayData();
        }
        function displayData() {
            const addTitle = localStorage.getItem('Title');
            const addYear = localStorage.getItem('Year');
            const addGenre = localStorage.getItem('Genre');
            document.getElementById('Add').innerText = addMovie;
        }

        loginForm.addEventListener("submit", addMovie);
        displayData();
        
    



































0: {title: "How to Train Your Dragon", year: "2025", genre: "Comedy", rating: "5"}
    genre: "Comedy"
    rating: "5"
    title: "How to Train Your Dragon"
    year: "2025"
1: