/**
 * JOACOGAMES - Engine de Interfaz v2.0
 * Desarrollado para: Amigos y Familia
 */

// 1. Base de Datos de la Red (Fácil de actualizar)
const JOACO_DATABASE = [
    {
        id: 1,
        title: "Counter-Strike 2",
        category: "Táctico / FPS",
        status: "ONLINE",
        img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/capsule_616x353.jpg",
        isHot: true,
        version: "v1.5.2"
    },
    {
        id: 2,
        title: "Dota 2",
        category: "MOBA / Estrategia",
        status: "UPDATE READY",
        img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/capsule_616x353.jpg",
        isHot: false,
        version: "v7.35"
    },
    {
        id: 3,
        title: "War Thunder",
        category: "Simulación",
        status: "ONLINE",
        img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/236390/capsule_616x353.jpg",
        isHot: true,
        version: "Apex"
    },
    {
        id: 4,
        title: "Marvel Rivals",
        category: "Shooter / Héroes",
        status: "BETA ACCESS",
        img: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2767030/capsule_616x353.jpg",
        isHot: true,
        version: "JG-Mod"
    }
];

// 2. Inyector de Contenido (Genera las tarjetas con tu estilo)
const renderCyberGrid = () => {
    const grid = document.getElementById('gameGrid');
    if (!grid) return;

    grid.innerHTML = JOACO_DATABASE.map(game => `
        <article class="jg-game-card-v2" data-id="${game.id}">
            ${game.isHot ? '<div class="hot-tag">SISTEMA CRÍTICO</div>' : ''}
            
            <div class="img-container">
                <img src="${game.img}" alt="${game.title}" class="jg-game-img">
                <div class="scanline"></div>
            </div>

            <div class="jg-card-body">
                <div class="card-meta">
                    <span class="version-code">${game.version}</span>
                    <span class="status-indicator ${game.status.toLowerCase().replace(' ', '-')}">${game.status}</span>
                </div>
                <h3 class="jg-game-title">${game.title}</h3>
                <p class="jg-game-cat">${game.category}</p>
                
                <div class="card-actions">
                    <button class="btn-launch" onclick="launchGame('${game.title}')">
                        EJECUTAR_NÚCLEO
                    </button>
                </div>
            </div>
        </article>
    `).join('');
};

// 3. Lógica de Interacción (Simulación de Sistema)
window.launchGame = (name) => {
    // Efecto de consola original
    console.log(`%c [JOACOGAMES] Iniciando secuencia para: ${name}... `, 'background: #e0ac00; color: #000; font-weight: bold;');
    
    // Aquí podrías redirigir o abrir un modal
    alert(`ACCESO CONCEDIDO: Iniciando ${name} en el servidor de Joaco.`);
};

// 4. Animación de Scroll y Aparición (Para que no sea aburrido)
const revealOnScroll = () => {
    const cards = document.querySelectorAll('.jg-game-card-v2');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 150); // Aparecen uno por uno en cascada
    });
};

// 5. Inicialización Global
document.addEventListener('DOMContentLoaded', () => {
    console.log("JoacoGames OS: Inicializando componentes...");
    
    // Renderizamos la grilla
    renderCyberGrid();

    // Estilos iniciales para la animación de entrada
    const cards = document.querySelectorAll('.jg-game-card-v2');
    cards.forEach(c => {
        c.style.opacity = "0";
        c.style.transform = "translateY(30px)";
        c.style.transition = "all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    });

    // Disparamos la aparición tras un breve delay
    setTimeout(revealOnScroll, 500);
});