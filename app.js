let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre) {
        amigos.push(nombre);
        actualizarLista();
        input.value = "";
    } else {
        alert("⚠️ Por favor, ingresa un nombre válido.");
    }
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = amigos.map(amigo => `<li>✅ ${amigo}</li>`).join('');
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("⚠️ Agrega al menos un amigo antes de sortear.");
        return;
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p> El ganador del super auto es: <strong>${amigos[Math.floor(Math.random() * amigos.length)]}</strong> 🚗🔥</p>`;
}
