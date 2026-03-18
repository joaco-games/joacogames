// Actualizar barra de Steam
function actualizarInterfaz() {
    const xpNecesaria = 500;
    const progresoPorcentaje = (usuario.puntos % xpNecesaria) / xpNecesaria * 100;
    
    document.getElementById("userLevel").innerText = `Nivel ${usuario.nivel}`;
    document.getElementById("userPoints").innerText = `${usuario.puntos} XP`;
    
    // Mover la barra de XP
    const fill = document.getElementById("xpFill");
    if(fill) fill.style.width = `${progresoPorcentaje}%`;
    
    const txt = document.getElementById("xpText");
    if(txt) txt.innerText = `${usuario.puntos % xpNecesaria} / ${xpNecesaria} XP para Nivel ${usuario.nivel + 1}`;
}
