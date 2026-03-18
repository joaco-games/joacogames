/**
 * JOACOGAMES - OS Core v3.0 (Edición Zero)
 * Sistema de gestión de proyectos privado.
 */

// 1. Base de Datos Local (Inicia vacía por diseño)
let JOACO_PROJECTS = [];

// 2. Renderizador de Interfaz (Controla qué se ve en pantalla)
const updateInterface = () => {
    const grid = document.getElementById('gameGrid');
    const emptyState = document.getElementById('emptyState');
    
    if (!grid || !emptyState) return;

    if (JOACO_PROJECTS.length === 0) {
        // Mostrar mensaje de sistema vacío
        grid.style.display = "none";
        emptyState.style.display = "flex";
    } else {
        // Ocultar mensaje vacío y mostrar proyectos
        emptyState.style.display = "none";
        grid.style.display = "grid";
        
        grid.innerHTML = JOACO_PROJECTS.map((proj, index) => `
            <article class="jg-game-card-v2" style="opacity: 1; transform: translateY(0);">
                <div class="hot-tag">PROYECTO_ACTIVO</div>
                <div class="img-container">
                    <div class="placeholder-img" style="height: 180px; background: #111; display: flex; align-items: center; justify-content: center; color: #e0ac00; font-family: monospace;">
                        [NODO_${index + 1}]
                    </div>
                    <div class="scanline"></div>
                </div>
                <div class="jg-card-body">
                    <div class="card-meta">
                        <span class="version-code">LOCAL_BUILD</span>
                        <span class="status-indicator online">ESTABLE</span>
                    </div>
                    <h3 class="jg-game-title">${proj.title.toUpperCase()}</h3>
                    <p class="jg-game-cat">Despliegue de JoacoGames</p>
                    <div class="card-actions">
                        <button class="btn-launch" onclick="launchProtocol('${proj.title}')">
                            CONECTAR_NÚCLEO
                        </button>
                    </div>
                </div>
            </article>
        `).join('');
    }
};

// 3. Función para Inyectar Proyectos (Original e Interactivo)
window.addNewGame = () => {
    const projectName = prompt(">> ACCESO AL NÚCLEO: Ingrese el nombre del nuevo proyecto:");
    
    if (projectName && projectName.trim() !== "") {
        console.log(`%c [SISTEMA] Inyectando datos: ${projectName}...`, 'color: #e0ac00; font-weight: bold;');
        
        JOACO_PROJECTS.push({
            title: projectName,
            timestamp: new Date().toLocaleTimeString()
        });
        
        updateInterface();
    }
};

// 4. Protocolo de Lanzamiento
window.launchProtocol = (name) => {
    alert(`PROTOCOLOS DE SEGURIDAD ACTIVADOS:\nConectando con el servidor local para: ${name}`);
    console.log(`%c [PROTOCOLO] Ejecutando instancia de ${name}`, 'color: #ff6a00');
};

// 5. Función Secreta: Modo Administrador (Original)
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

// 6. Inicialización del Sistema
document.addEventListener('DOMContentLoaded', () => {
    console.log("%c JOACOGAMES OS v3.0 - CARGA COMPLETADA ", 'background: #000; color: #e0ac00; border: 1px solid #e0ac00;');
    
    // El sistema arranca verificando el estado del núcleo
    updateInterface();
});/**
 * JOACOGAMES - OS Core v3.0 (Edición Zero)
 * Sistema de gestión de proyectos privado.
 */

// 1. Base de Datos Local (Inicia vacía por diseño)
let JOACO_PROJECTS = [];

// 2. Renderizador de Interfaz (Controla qué se ve en pantalla)
const updateInterface = () => {
    const grid = document.getElementById('gameGrid');
    const emptyState = document.getElementById('emptyState');
    
    if (!grid || !emptyState) return;

    if (JOACO_PROJECTS.length === 0) {
        // Mostrar mensaje de sistema vacío
        grid.style.display = "none";
        emptyState.style.display = "flex";
    } else {
        // Ocultar mensaje vacío y mostrar proyectos
        emptyState.style.display = "none";
        grid.style.display = "grid";
        
        grid.innerHTML = JOACO_PROJECTS.map((proj, index) => `
            <article class="jg-game-card-v2" style="opacity: 1; transform: translateY(0);">
                <div class="hot-tag">PROYECTO_ACTIVO</div>
                <div class="img-container">
                    <div class="placeholder-img" style="height: 180px; background: #111; display: flex; align-items: center; justify-content: center; color: #e0ac00; font-family: monospace;">
                        [NODO_${index + 1}]
                    </div>
                    <div class="scanline"></div>
                </div>
                <div class="jg-card-body">
                    <div class="card-meta">
                        <span class="version-code">LOCAL_BUILD</span>
                        <span class="status-indicator online">ESTABLE</span>
                    </div>
                    <h3 class="jg-game-title">${proj.title.toUpperCase()}</h3>
                    <p class="jg-game-cat">Despliegue de JoacoGames</p>
                    <div class="card-actions">
                        <button class="btn-launch" onclick="launchProtocol('${proj.title}')">
                            CONECTAR_NÚCLEO
                        </button>
                    </div>
                </div>
            </article>
        `).join('');
    }
};

// 3. Función para Inyectar Proyectos (Original e Interactivo)
window.addNewGame = () => {
    const projectName = prompt(">> ACCESO AL NÚCLEO: Ingrese el nombre del nuevo proyecto:");
    
    if (projectName && projectName.trim() !== "") {
        console.log(`%c [SISTEMA] Inyectando datos: ${projectName}...`, 'color: #e0ac00; font-weight: bold;');
        
        JOACO_PROJECTS.push({
            title: projectName,
            timestamp: new Date().toLocaleTimeString()
        });
        
        updateInterface();
    }
};

// 4. Protocolo de Lanzamiento
window.launchProtocol = (name) => {
    alert(`PROTOCOLOS DE SEGURIDAD ACTIVADOS:\nConectando con el servidor local para: ${name}`);
    console.log(`%c [PROTOCOLO] Ejecutando instancia de ${name}`, 'color: #ff6a00');
};

// 5. Función Secreta: Modo Administrador (Original)
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

// 6. Inicialización del Sistema
document.addEventListener('DOMContentLoaded', () => {
    console.log("%c JOACOGAMES OS v3.0 - CARGA COMPLETADA ", 'background: #000; color: #e0ac00; border: 1px solid #e0ac00;');
    
    // El sistema arranca verificando el estado del núcleo
    updateInterface();
});
