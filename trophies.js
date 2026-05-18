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
    const popup = document.getElementById("trophy-popup").innerHTML = `
    <img src="Assets/marathon_trophy.png" class="trophy-icon">
    <span>Trophy Unlocked: All Movies Watched!</span>
`;
}

loadTrophies();
