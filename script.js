// --- Datos Simulados de Juegos de JoacoGames ---
// Puedes editar esta lista para que coincida con tus juegos reales
const gamesData = [
    {
        title: "Dota 2 (El Inmortal)",
        genre: ["MOBA", "Estrategia"],
        price: "Gratis",
        isNew: false,
        image: "images/game1_thumb.jpg", // Reemplaza con tus imágenes reales
        link: "https://store.steampowered.com/app/570/"
    },
    {
        title: "Counter-Strike 2 (Red Joaco)",
        genre: ["Shooter", "Táctico"],
        price: "Gratis",
        isNew: true,
        image: "images/game2_thumb.jpg",
        link: "https://store.steampowered.com/app/730/"
    },
    {
        title: "Apex Legends™ - Versión JG",
        genre: ["Battle Royale", "Acción"],
        price: "Gratis",
        isNew: false,
        image: "images/game3_thumb.jpg",
        link: "https://store.steampowered.com/app/1172470/"
    },
     {
        title: "War Thunder (Joaco Edition)",
        genre: ["Simulación", "Vehículos"],
        price: "Gratis",
        isNew: false,
        image: "images/game4_thumb.jpg",
        link: "https://store.steampowered.com/app/236390/"
    },
     {
        title: "Overwatch® 2 - Servidor Local",
        genre: ["Shooter", "Héroes"],
        price: "Gratis",
        isNew: true,
        image: "images/game5_thumb.jpg",
        link: "https://store.steampowered.com/app/2357570/"
    },
];

// --- Función para Cargar la Cuadrícula de Juegos ---
function loadGameGrid() {
    const gridContainer = document.getElementById('gameGrid');
    if (!gridContainer) return;

    // Limpia el cargador
    gridContainer.innerHTML = '';

    gamesData.forEach(game => {
        const cardHTML = `
            <div class="jg-game-card">
                ${game.isNew ? '<span class="jg-new-badge">NUEVO</span>' : ''}
                <img src="${game.image}" alt="${game.title}" class="jg-game-thumb">
                <div class="jg-card-info">
                    <h4 class="jg-game-title">${game.title}</h4>
                    <div class="jg-game-details">
                        <div class="jg-game-genres">
                            ${game.genre.map(g => `<span class="jg-genre-tag">${g}</span>`).join('')}
                        </div>
                        <span class="jg-game-price">${game.price}</span>
                    </div>
                </div>
                <a href="${game.link}" target="_blank" class="jg-card-link-overlay"></a>
            </div>
        `;
        gridContainer.innerHTML += cardHTML;
    });
}

// --- Gestión de Estado de Navegación ---
function setupNavStatus() {
    const navLinks = document.querySelectorAll('.jg-main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(nl => nl.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

// --- Inicialización ---
document.addEventListener('DOMContentLoaded', () => {
    // Pequeño retraso para simular la "carga de red"
    setTimeout(loadGameGrid, 800);
    setupNavStatus();
});
