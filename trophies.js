const trophies = [
    {
        id: "all_movies",
        name: "Completionist",
        description: "Finish the entire marathon.",
        unlocked: false
    }
];

function loadTrophies() {
    const saved = JSON.parse(localStorage.getItem("trophies"));
    if (saved) {
        saved.forEach(savedTrophy => {
            const trophy = trophies.find(t => t.id === savedTrophy.id);
            if (trophy) trophy.unlocked = savedTrophy.unlocked;
        });
    }
}

function saveTrophies() {
    localStorage.setItem("trophies", JSON.stringify(trophies));
}

function unlockTrophy(id) {
    const trophy = trophies.find(t => t.id === id);
    if (trophy && !trophy.unlocked) {
        trophy.unlocked = true;
        saveTrophies();
        showTrophyPopup(trophy);
    }
}

function showTrophyPopup(trophy) {
    let popup = document.getElementById("trophy-popup");
    if (!popup) {
        popup = document.createElement("div");
        popup.id = "trophy-popup";
        document.body.appendChild(popup);
    }
    popup.innerHTML = `
        <img src="Assets/marathon_trophy.png" class="trophy-icon">
        <span>Trophy Unlocked: ${trophy.name}!</span>
    `;
    popup.style.display = "block";

    // Auto-hide after 4 seconds
    clearTimeout(showTrophyPopup._timer);
    showTrophyPopup._timer = setTimeout(() => {
        popup.style.display = "none";
    }, 4000);
}

loadTrophies();
