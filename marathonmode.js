let currentIndex = 0;
let countdownTimer;
let timeLeft = 5400;
let runVoided = false;

const marathonMovies = [
    { title: "C.H.U.D.", fileId: "1DVucLoYKHbT3FHqG4BwRx9A0c95zoSLL", thumbnail: "Movie_thumbnails/chud.png" },
    { title: "The Reconciler", fileId: "1bX0oHHq470ZUpcZC4K9HZEpsc8Vkxl8q", thumbnail: "Movie_thumbnails/reconciler.png" },
    { title: "The Amazing Bulk", fileId: "1AScuz9A8GWDqKR1jDiIP7Z4Jp6orowUD", thumbnail: "Movie_thumbnails/amazing_bulk.png" },
    { title: "Attack of the Killer Tomatoes", fileId: "1jWofaMO6ifM-IPEqJ5HtWFrgmTf1veYS", thumbnail: "Movie_thumbnails/Attack_of_the_Killer_Tomatoes.png" },
    { title: "Piranha", fileId: "19huyMBe-u7dgQYrdQdzKmcWB8qH6pTPp", thumbnail: "Movie_thumbnails/Piranha.png" },
    { title: "Birdemic: Shock and Terror", fileId: "1PhnWw2Ac9lz2stTS6VW41DIu3e-_mn2G", thumbnail: "Movie_thumbnails/Birdemic.png" },
    { title: "C.H.U.D. II", fileId: "1t31WVvTZXQ2lUUo4_5Ciw5wDSDAfNv0j", thumbnail: "Movie_thumbnails/Chud_two.png" },
    { title: "Titanic II", fileId: "1eYgqSjBgKfKYG7-UoMxls8Vr-MAyICko", thumbnail: "Movie_thumbnails/Titanic_two.png" },
    { title: "Super Mario Bros (Morton Jankel Cut)", fileId: "1dNQqMjBO-eoONfGnv20vUCEisbaHPHWh", thumbnail: "Movie_thumbnails/Super_Mario_Bros.png" }
];

function voidRun() {
    runVoided = true;
    alert("Run void: you switched tabs. Stay on this page to finish the marathon.");
}

// Void the run only if the user leaves the tab/window during the marathon.
// (Don't fire on internal navigation — finishing a movie stays on the page.)
document.addEventListener("visibilitychange", () => {
    if (document.hidden) voidRun();
});

function formatTime(t) {
    let h = Math.floor(t / 3600);
    let m = Math.floor((t % 3600) / 60);
    let s = t % 60;
    return `${h}:${m.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`;
}

function startCountdown() {
    clearInterval(countdownTimer);
    timeLeft = 5400;
    document.getElementById("countdown").textContent = formatTime(timeLeft);

    countdownTimer = setInterval(() => {
        timeLeft--;
        document.getElementById("countdown").textContent = formatTime(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(countdownTimer);
            document.getElementById("finish-button").disabled = false;
        }
    }, 1000);
}

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

    document.getElementById("finish-button").disabled = true;

    startCountdown();
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
    if (runVoided) {
        alert("Run void — you cannot continue.");
        return;
    }

    currentIndex++;

    if (currentIndex >= marathonMovies.length) {
        unlockTrophy("all_movies");
        alert("Marathon complete!");
        return;
    }

    loadMarathonMovie();
}

document.getElementById("finish-button").onclick = nextMovie;

loadMarathonMovie();
