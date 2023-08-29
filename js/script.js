function actualizarContador() {
  const fechaObjetivo = new Date('2023-11-11T14:00:00'); // Fecha y hora objetivo
  const ahora = new Date(); // Hora actual

  const diferencia = fechaObjetivo - ahora; // Diferencia en milisegundos
  const segundos = Math.floor(diferencia / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);

  const segundosRestantes = segundos % 60;
  const minutosRestantes = minutos % 60;
  const horasRestantes = horas % 24;

  document.getElementById('dias').textContent = dias.toString().padStart(2, '0');
  document.getElementById('horas').textContent = horasRestantes.toString().padStart(2, '0');
  document.getElementById('minutos').textContent = minutosRestantes.toString().padStart(2, '0');
  document.getElementById('segundos').textContent = segundosRestantes.toString().padStart(2, '0');
}

actualizarContador(); // Actualizar contador inmediatamente
setInterval(actualizarContador, 1000); // Actualizar cada segundo

/* Reproductor de musica */
const reproductor = document.getElementById("reproductor");
const audio = document.getElementById("miAudio");
let reproduciendo = false;

reproductor.addEventListener("click", (e) => {
    e.preventDefault();

    if (reproduciendo) {
        audio.pause();
        reproduciendo = false;
        reproductor.querySelector("i").classList.remove("bi-pause-fill");
        reproductor.querySelector("i").classList.add("bi-caret-right-fill");
    } else {
        audio.play();
        reproduciendo = true;
        reproductor.querySelector("i").classList.remove("bi-caret-right-fill");
        reproductor.querySelector("i").classList.add("bi-pause-fill");
    }
});




