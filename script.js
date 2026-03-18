// --- DATOS DEL USUARIO (Sincronizado con tu GDScript) ---
let usuario = {
    "puntos": 0,
    "nivel": 1,
    "partidas": 0,
    "victorias_seguidas": 0,
    "logros": {
        "novato": {"titulo": "Primer Paso", "ganado": false},
        "racha": {"titulo": "Racha de Fuego", "ganado": false}
    }
};

// --- LÓGICA DE PROGRESO (Igual a tu Godot) ---
function registrarPartida(gano) {
    usuario.partidas += 1;
    if (gano) {
        usuario.victorias_seguidas += 1;
        usuario.puntos += 100;
    } else {
        usuario.victorias_seguidas = 0;
        usuario.puntos += 20;
    }

    // Subir de nivel cada 500 puntos
    usuario.nivel = Math.floor(usuario.puntos / 500) + 1;
    
    chequearLogros();
    actualizarInterfaz();
    
    // Feedback visual
    console.log(`[JOACOGAMES] Partidas: ${usuario.partidas} | XP: ${usuario.puntos}`);
}

function chequearLogros() {
    if (usuario.partidas >= 1 && !usuario.logros.novato.ganado) {
        desbloquearLogro("novato");
    }
    if (usuario.victorias_seguidas >= 3 && !usuario.logros.racha.ganado) {
        desbloquearLogro("racha");
    }
}

function desbloquearLogro(id) {
    usuario.logros[id].ganado = true;
    const panel = document.getElementById("notificacionLogro");
    const titulo = document.getElementById("logroTitulo");
    
    titulo.innerText = "🏆 " + usuario.logros[id].titulo;
    panel.classList.add("show");
    
    setTimeout(() => { panel.classList.remove("show"); }, 3000);
}

function actualizarInterfaz() {
    document.getElementById("userLevel").innerText = `Nivel ${usuario.nivel}`;
    document.getElementById("userPoints").innerText = `${usuario.puntos} XP`;
    
    // Efecto wave para novedades
    document.getElementById("novedadesText").innerText = "🔥 NUEVO: Sistema de rangos activado!";
}

// Inyección de proyectos dinámica
let misProyectos = ["Age of the Dead Master", "Grim Empires"];

function renderBiblioteca() {
    const grid = document.getElementById("gameGrid");
    grid.innerHTML = misProyectos.map(p => `
        <div class="link-node" onclick="registrarPartida(true)" style="text-align:left">
            <span>🎮 ${p}</span>
        </div>
    `).join('');
}

function addNewGame() {
    const p = prompt("Nombre del nuevo proyecto:");
    if(p) { misProyectos.push(p); renderBiblioteca(); }
}

document.addEventListener("DOMContentLoaded", () => {
    actualizarInterfaz();
    renderBiblioteca();
});
