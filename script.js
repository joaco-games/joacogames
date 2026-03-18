const container = document.getElementById("game-container");
const searchInput = document.getElementById("search");

let games = [];

fetch("games.json")
  .then(res => res.json())
  .then(data => {
    games = data;
    renderGames(games);
  });

function renderGames(gameList) {
  container.innerHTML = "";

  gameList.forEach(game => {
    const card = document.createElement("div");
    card.classList.add("game-card");

    card.innerHTML = `
      <img src="${game.image}">
      <div class="game-info">
        <h3>${game.title}</h3>
        <p>${game.description}</p>
        <button onclick="playGame('${game.url}')">Jugar</button>
      </div>
    `;

    container.appendChild(card);
  });
}

function playGame(url) {
  window.open(url, "_blank");
}

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = games.filter(g =>
    g.title.toLowerCase().includes(value)
  );
  renderGames(filtered);
});
