document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("search");
    const cards = document.querySelectorAll(".moviecard");

    // NEW: wrapper for the image + text
    const noResultsWrapper = document.getElementById("no-results-wrapper");

    searchBar.addEventListener("input", () => {
        const query = searchBar.value.toLowerCase();
        let visibleCount = 0;

        cards.forEach(card => {
            const titleElement = card.querySelector(".movie-title");
            const title = titleElement ? titleElement.textContent.toLowerCase() : "";
            const match = title.includes(query);

            card.style.display = match ? "" : "none";
            if (match) visibleCount++;
        });

        const showMessage = query && visibleCount === 0;

        // NEW: show/hide the entire block
        noResultsWrapper.style.display = showMessage ? "flex" : "none";
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const vid = document.getElementById("motw");

    if (vid) {
        vid.onloadedmetadata = () => {
            vid.playbackRate = 2;
            vid.defaultPlaybackRate = 2;
        };

        vid.addEventListener("ratechange", () => {
            if (vid.playbackRate !== 2) {
                vid.playbackRate = 2;
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const vid = document.getElementById("motw");

    if (!vid) return;

    // Force 2x on load
    vid.onloadedmetadata = () => {
        vid.playbackRate = 2;
        vid.defaultPlaybackRate = 2;
    };

    // Prevent user from changing speed
    vid.addEventListener("ratechange", () => {
        if (vid.playbackRate !== 2) {
            vid.playbackRate = 2;
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const warning = document.querySelector(".mature-warning");
    const player = document.getElementById("movie-player");
    const btn = document.getElementById("continue");

    if (btn && warning && player) {
        btn.onclick = () => {
            warning.style.display = "none";
            player.style.display = "block";
        };
    }
});