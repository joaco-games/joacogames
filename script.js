let usuario = {
    puntos: 0,
    nivel: 1,
    partidas: 0,
    logros: { "novato": false, "racha": false }
};

function registrarPartida(gano) {
    usuario.partidas++;
    usuario.puntos += gano ? 100 : 20;
    
    // Subida de nivel cada 500 XP
    usuario.nivel = Math.floor(usuario.puntos / 500) + 1;
    
    chequearLogros();
    actualizarInterfaz();
    localStorage.setItem('JG_DATA', JSON.stringify(usuario));
    
    // Vibración táctil para celulares
    if ('vibrate' in navigator) navigator.vibrate(50);
}

function chequearLogros() {
    if (usuario.partidas >= 1 && !usuario.logros.novato) {
        usuario.logros.novato = true;
        mostrarLogro("PRIMER PASO");
    }
}

function mostrarLogro(titulo) {
    const n = document.getElementById("notificacionLogro");
    document.getElementById("logroTitulo").innerText = "🏆 " + titulo;
    n.classList.add("show");
    setTimeout(() => n.classList.remove("show"), 3000);
}

function actualizarInterfaz() {
    const xpSigNivel = 500;
    const progreso = (usuario.puntos % xpSigNivel) / xpSigNivel * 100;
    
    document.getElementById("userLevel").innerText = `Nivel ${usuario.nivel}`;
    document.getElementById("userPoints").innerText = `${usuario.puntos} XP`;
    document.getElementById("xpFill").style.width = progreso + "%";
    document.getElementById("xpText").innerText = `${usuario.puntos % xpSigNivel} / ${xpSigNivel} XP`;
}

// Cargar datos al iniciar
document.addEventListener("DOMContentLoaded", () => {
    const data = localStorage.getItem('JG_DATA');
    if (data) usuario = JSON.parse(data);
    actualizarInterfaz();
});
