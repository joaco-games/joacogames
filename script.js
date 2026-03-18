/**
 * JOACOGAMES - Mobile Engine
 */

let JOACO_PROJECTS = [];

const updateInterface = () => {
    const grid = document.getElementById('gameGrid');
    const emptyState = document.getElementById('emptyState');
    
    if (JOACO_PROJECTS.length === 0) {
        grid.style.display = "none";
        emptyState.style.display = "flex";
    } else {
        emptyState.style.display = "none";
        grid.style.display = "grid";
        
        grid.innerHTML = JOACO_PROJECTS.map((proj) => `
            <article class="jg-game-card-v2">
                <div class="jg-card-body">
                    <span class="version-code">MOBILE_READY</span>
                    <h3 class="jg-game-title">${proj.title}</h3>
                    <button class="btn-primary-neon" style="width:100%" onclick="launchProtocol('${proj.title}')">
                        INICIAR
                    </button>
                </div>
            </article>
        `).join('');
    }
};

window.addNewGame = () => {
    // Usamos un prompt simple que funciona bien en móviles
    const name = prompt("Nombre del Proyecto:");
    if (name) {
        JOACO_PROJECTS.push({ title: name.toUpperCase() });
        updateInterface();
        // Feedback táctico
        if ('vibrate' in navigator) navigator.vibrate(50); 
    }
};

window.launchProtocol = (name) => {
    alert(`ACCESO MÓVIL: Conectando a ${name}`);
};

// Modo Admin con Toques
let touches = 0;
window.adminMode = () => {
    touches++;
    if (touches === 5) {
        document.body.classList.toggle('admin-mode-active');
        alert("MODO ADMIN ACTIVADO");
        touches = 0;
    }
};

document.addEventListener('DOMContentLoaded', updateInterface);
