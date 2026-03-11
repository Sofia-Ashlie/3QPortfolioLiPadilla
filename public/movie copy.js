const loginForm = document.getElementById("Add");
const inputTitle = document.getElementById("Title");
const inputYear = document.getElementById("Year");
const inputGenre = document.getElementById("Genre");

function addMovie(event) {
    event.preventDefault();

    const newMovie = {
        Title: inputTitle.value,
        Year: inputYear.value,
        Genre: inputGenre.value
    };

    const stringifiedData = JSON.stringify(newMovie);
    localStorage.setItem('newMovie', stringifiedData)

    stringifiedData.push(newMovie);

    displayData();
}

function displayData(){
    console.log('newMovie');
}

loginForm.addEventListener("submit", addMovie);
displayData();


    































