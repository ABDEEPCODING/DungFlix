document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("search");
    const cards = document.querySelectorAll(".moviecard");
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

        noResultsWrapper.style.display = query && visibleCount === 0 ? "flex" : "none";
    });

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