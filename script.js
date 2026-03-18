/**
 * JOACOGAMES ENGINE - Mobile Core v3.0
 * Lógica de Progresión (Traducida de Godot) y DRM (Wrapper)
 */

// --- DATOS DEL USUARIO (Fácil de extender) ---
let usuario = {
    puntos: 0,
    nivel: 1,
    partidas: 0,
    victorias_seguidas: 0,
    favoritos: ["Truco", "Ajedrez"],
    logros: {
        "novato": { titulo: "Primer Paso", desc: "Jugaste 1 partida", ganado: false },
        "racha": { titulo: "Racha de Fuego", desc: "3 victorias seguidas", ganado: false }
    }
};

// Base de datos de TUS propios proyectos
let misProyectos = [];

// --- LÓGICA DE PROGRESO (Igual a tu Código de Godot) ---
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
    guardarProgreso();
}

// --- CHEQUEAR LOGROS (Punto 6 de tu GDScript) ---
function chequearLogros() {
    // Logro Novato (Jugaste 1 partida)
    if (usuario.partidas >= 1 && !usuario.logros.novato.ganado) {
        desbloquearLogro("novato");
    }
    
    // Logro Racha (3 victorias seguidas)
    if (usuario.victorias_seguidas >= 3 && !usuario.logros.racha.ganado) {
        desbloquearLogro("racha");
    }
}

// --- NOTIFICACIÓN DE LOGRO Style Godot ---
function desbloquearLogro(id) {
    usuario.logros[id].ganado = true;
    const n = document.getElementById("notificacionLogro");
    document.getElementById("logroTitulo").innerText = "🏆 " + usuario.logros[id].titulo;
    n.classList.add("show");
    setTimeout(() => n.classList.remove("show"), 3000);
}

// --- RENDERIZADO DE GRILLA PERSONALIZADA (Vacia de juegos comerciales) ---
function renderProyectos() {
    const grid = document.getElementById("gameGrid");
    const empty = document.getElementById("emptyState");
    
    // Si no hay proyectos, mostramos el scanner
    if (misProyectos.length === 0) {
        grid.style.display = "none";
        empty.style.display = "flex";
    } else {
        empty.style.display = "none";
        grid.style.display = "grid";
        
        // Creamos las tarjetas con tu estilo (sin steam)
        grid.innerHTML = misProyectos.map(p => `
            <article class="jg-game-card-v2">
                <div class="img-container">
                    <div class="placeholder-img" style="height: 150px; background: #111; display: flex; align-items: center; justify-content: center; color: #e0ac00; font-family: monospace;">
                        [NODO_${p.title.substring(0,3).toUpperCase()}]
                    </div>
                </div>
                <div class="jg-card-body">
                    <span class="version-code">MOBILE_READY</span>
                    <h3 class="jg-game-title">${p.title}</h3>
                    <div class="card-actions">
                        <button class="btn-launch" style="width: 100%" onclick="launchProtocol('${p.title}')">
                            CONECTAR_NÚCLEO
                        </button>
                    </div>
                </div>
            </article>
        `).join('');
    }
}

// --- FUNCIÓN PARA AÑADIR JUEGO (Original) ---
window.addNewGame = () => {
    // Usamos prompt simple (funciona bien en móviles)
    const name = prompt(">> ACCESO AL NÚCLEO: Ingrese el nombre del nuevo proyecto:");
    
    if (name && name.trim() !== "") {
        console.log(`%c [SISTEMA] Inyectando datos: ${name}...`, 'color: #e0ac00; font-weight: bold;');
        
        misProyectos.push({ title: name.toUpperCase() });
        renderProyectos();
        guardarProgreso();
    }
};

// --- PROTOCOLO DE LANZAMIENTO (Punto 7 de feedback visual) ---
window.launchProtocol = (name) => {
    // Feedback visual tactico
    alert(`PROTOCOLOS DE SEGURIDAD ACTIVADOS:\nConectando con el servidor local para: ${name}`);
    console.log(`%c [PROTOCOLO] Ejecutando instancia de ${name}`, 'color: #ff6a00');
};

// --- MODO ADMIN SECRETOS (Logica interactiva) ---
let clickCount = 0;
window.adminMode = () => {
    clickCount++;
    if (clickCount === 5) {
        document.body.style.filter = "hue-rotate(180deg)";
        console.warn("[SISTEMA] ¡MODO HACKER ACTIVADO! Cambiando espectro de color...");
        alert("MODO ADMIN: Espectro de interfaz modificado.");
        clickCount = 0;
    }
};

// --- ACTUALIZAR LA INTERFAZ ---
function actualizarInterfaz() {
    const xpSigNivel = 500;
    const progresoPorcentaje = (usuario.puntos % xpSigNivel) / xpSigNivel * 100;
    
    document.getElementById("userLevel").innerText = `Nivel ${usuario.nivel}`;
    document.getElementById("userPoints").innerText = `${usuario.puntos} XP`;
    document.getElementById("novedadesText").innerText = "🔥 NUEVO: Sistema de rangos activado!";
}

// --- GUARDAR Y CARGAR PROGRESO (Sincronización tactica) ---
function guardarProgreso() {
    // Guardamos en LocalStorage del navegador
    const data = {
        usuario: usuario,
        misProyectos: misProyectos
    };
    localStorage.setItem('JoacoGamesData', JSON.stringify(data));
}

function cargarProgreso() {
    const data = localStorage.getItem('JoacoGamesData');
    if (data) {
        const parse = JSON.parse(data);
        usuario = parse.usuario;
        misProyectos = parse.misProyectos;
    }
}

// --- INICIALIZACIÓN GLOBAL ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("JoacoGames Mobile Core: Inicializando componentes...");
    
    cargarProgreso();
    actualizarInterfaz();
    renderProyectos();
});
