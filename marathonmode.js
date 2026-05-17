let currentIndex = 0;

const marathonMovies = [
    { title: "C.H.U.D.", youtubeId: "lTvfzolWRBw", thumbnail: "Movie_thumbnails/chud.png" },


    { title: "The Reconciler", youtubeId: null, thumbnail: "Movie_thumbnails/reconciler.png" },
    { title: "The Amazing Bulk", youtubeId: null, thumbnail: "Movie_thumbnails/amazing_bulk.png" },
    { title: "Attack of the Killer Tomatoes", youtubeId: null, thumbnail: "Movie_thumbnails/Attack_of_the_Killer_Tomatoes.png" },
    { title: "Piranha", youtubeId: null, thumbnail: "Movie_thumbnails/Piranha.png" },
    { title: "Birdemic: Shock and Terror", youtubeId: null, thumbnail: "Movie_thumbnails/Birdemic.png" },
    { title: "C.H.U.D. II", youtubeId: null, thumbnail: "Movie_thumbnails/Chud_two.png" },
    { title: "Titanic II", youtubeId: null, thumbnail: "Movie_thumbnails/titanic_two.png" },
    { title: "Super Mario Bros (Morton Jankel Cut)", youtubeId: null, thumbnail: "Movie_thumbnails/Super_Mario_Bros.png" }
];

function loadMarathonMovie() {
    const movie = marathonMovies[currentIndex];

    document.getElementById("now-watching-img").src = movie.thumbnail;
    document.getElementById("movie-title").textContent = movie.title;

    if (movie.youtubeId) {
        document.getElementById("movie-frame").src =
            `https://www.youtube.com/embed/${movie.youtubeId}`;
    } else {
        // Placeholder video (YouTube blank screen)
        document.getElementById("movie-frame").src =
            "https://www.youtube.com/embed/dQw4w9WgXcQ"; 
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
