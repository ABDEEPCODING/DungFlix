document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("search");
    const cards = document.querySelectorAll(".moviecard");
    const noResults = document.getElementById("no-results");
    const noSuggestion = document.getElementById("no-suggestion");

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

        noResults.style.display = showMessage ? "block" : "none";
        noSuggestion.style.display = showMessage ? "block" : "none";
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