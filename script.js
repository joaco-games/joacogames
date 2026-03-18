/**
 * JOACOGAMES ENGINE - Sincronizado con Godot v3.5.3
 */

let usuario = {
    puntos: 0,
    nivel: 1,
    partidas: 0,
    victorias_seguidas: 0,
    logros: {
        "novato": { titulo: "Primer Paso", ganado: false },
        "racha": { titulo: "Racha de Fuego", ganado: false }
    }
};

let misProyectos = [];

// Función registrar_partida (Lógica de tu código Godot)
function registrarPartida(gano) {
    usuario.partidas += 1;
    if (gano) {
        usuario.victorias_seguidas += 1;
        usuario.puntos += 100;
    } else {
        usuario.victorias_seguidas = 0;
        usuario.puntos += 20;
    }

    // Subida de nivel (cada 500 XP)
    usuario.nivel = Math.floor(usuario.puntos / 500) + 1;
    
    chequearLogros();
    actualizarInterfaz();
    guardarProgreso();
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
    document.getElementById("logroTitulo").innerText = "🏆 " + usuario.logros[id].titulo;
    panel.classList.add("show");
    setTimeout(() => panel.classList.remove("show"), 3000);
}

function actualizarInterfaz() {
    document.getElementById("userLevel").innerText = `Nivel ${usuario.nivel}`;
    document.getElementById("userPoints").innerText = `${usuario.puntos} XP`;
    document.getElementById("novedadesText").innerText = "🔥 SISTEMA ACTUALIZADO";
}

function addNewGame() {
    const name = prompt(">> Inyectar nuevo proyecto al núcleo:");
    if (name) {
        misProyectos.push(name.toUpperCase());
        renderProyectos();
    }
}

function renderProyectos() {
    const grid = document.getElementById("gameGrid");
    const empty = document.getElementById("emptyState");
    
    if (misProyectos.length > 0) {
        empty.style.display = "none";
        grid.innerHTML = misProyectos.map(p => `
            <div class="link-node" onclick="registrarPartida(true)">
                <div style="font-size: 0.6rem; color: #e0ac00;">PROYECTO_ACTIVO</div>
                ${p}
            </div>
        `).join('');
    }
}

// Persistencia de datos en celular
function guardarProgreso() {
    localStorage.setItem('JoacoGames_Data', JSON.stringify(usuario));
}

function cargarProgreso() {
    const data = localStorage.getItem('JoacoGames_Data');
    if (data) {
        usuario = JSON.parse(data);
        actualizarInterfaz();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    cargarProgreso();
});
