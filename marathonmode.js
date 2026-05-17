let currentIndex = 0;

const marathonMovies = [
    { title: "C.H.U.D.", fileId: "1DVucLoYKHbT3FHqG4BwRx9A0c95zoSLL", thumbnail: "Movie_thumbnails/chud.png" },
    { title: "The Reconciler", fileId: "1bX0oHHq470ZUpcZC4K9HZEpsc8Vkxl8q", thumbnail: "Movie_thumbnails/reconciler.png" },
    { title: "The Amazing Bulk", fileId: "1AScuz9A8GWDqKR1jDiIP7Z4Jp6orowUD", thumbnail: "Movie_thumbnails/amazing_bulk.png" },
    { title: "Attack of the Killer Tomatoes", fileId: "1jWofaMO6ifM-IPEqJ5HtWFrgmTf1veYS", thumbnail: "Movie_thumbnails/Attack_of_the_Killer_Tomatoes.png" },
    { title: "Piranha", fileId: "19huyMBe-u7dgQYrdQdzKmcWB8qH6pTPp", thumbnail: "Movie_thumbnails/Piranha.png" },
    { title: "Birdemic: Shock and Terror", fileId: "1PhnWw2Ac9lz2stTS6VW41DIu3e-_mn2G", thumbnail: "Movie_thumbnails/Birdemic.png" },
    { title: "C.H.U.D. II", fileId: "1t31WVvTZXQ2lUUo4_5Ciw5wDSDAfNv0j", thumbnail: "Movie_thumbnails/Chud_two.png" },
    { title: "Titanic II", fileId: "1eYgqSjBgKfKYG7-UoMxls8Vr-MAyICko", thumbnail: "Movie_thumbnails/titanic_two.png" },
    { title: "Super Mario Bros (Morton Jankel Cut)", fileId: "1dNQqMjBO-eoONfGnv20vUCEisbaHPHWh", thumbnail: "Movie_thumbnails/Super_Mario_Bros.png" }
];

function loadMarathonMovie() {
    const movie = marathonMovies[currentIndex];

    document.getElementById("now-watching-img").src = movie.thumbnail;
    document.getElementById("movie-title").textContent = movie.title;

    if (movie.fileId) {
        document.getElementById("movie-frame").src =
            `https://drive.google.com/file/d/${movie.fileId}/preview`;
    } else {
        document.getElementById("movie-frame").src = "";
    }

    document.getElementById("progress-text").textContent =
        `You are watching movie ${currentIndex + 1} of ${marathonMovies.length}`;

    updateNextCard();
}

function updateNextCard() {
    const nextIndex = currentIndex + 1;

    if (nextIndex >= marathonMovies.length) {
        document.getElementById("next-card").innerHTML =
            "<p>No more movies — marathon complete!</p>";
        return;
    }

    const nextMovie = marathonMovies[nextIndex];

    document.getElementById("next-card").innerHTML = `
        <div class="moviecard">
            <img src="${nextMovie.thumbnail}">
            <p class="movie-title">${nextMovie.title}</p>
        </div>
    `;
}

function nextMovie() {
    currentIndex++;

    if (currentIndex >= marathonMovies.length) {
        alert("Marathon complete!");
        return;
    }

    loadMarathonMovie();
}

document.getElementById("next-button").onclick = nextMovie;

loadMarathonMovie();
