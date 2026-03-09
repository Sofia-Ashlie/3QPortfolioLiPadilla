const loginForm = document.getElementById("Add");
const inputTitle = document.getElementById("Title");
const inputYear = document.getElementById("Year");
const inputGenre = document.getElementById("Genre");

function addMovie() {
            const data = document.getElementById('Title').value;
            localStorage.setItem('Title', data);
            displayData();
        }
        function displayData() {
            const addMovie = localStorage.getItem('Title');
            document.getElementById('Add').innerText = addMovie;
        }
        displayData();



































0: {title: "How to Train Your Dragon", year: "2025", genre: "Comedy", rating: "5"}
    genre: "Comedy"
    rating: "5"
    title: "How to Train Your Dragon"
    year: "2025"
1: