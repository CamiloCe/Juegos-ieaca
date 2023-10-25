// Arreglo que guarda las imágenes de las banderas. Este será el orden en que se mostrarán.
let banderas = ["re.png", "chin.png", "ch.png", "ni.png", "co.png", "su.png", "va.png", "bo.png", "ja.png", "ar.png", "uc.png", "san.png", "no.png", "gre.png", "ma.png"];

// Arreglo que guarda la opción correcta para cada nivel.
let correcta = [0, 2, 1, 1, 0, 2, 0, 1, 0, 2, 1, 0, 1, 1, 2];

// Arreglo que guarda los países a mostrar en cada nivel.
let opciones = [];
opciones.push(["Reino Unido", "Australia", "Gran Bretaña"]);
opciones.push(["Japón", "Vietnam", "China"]);
opciones.push(["Mongolia", "Chile", "Perú"]);
opciones.push(["Sudáfrica", "Nigeria", "Senegal"]);
opciones.push(["Colombia", "Ecuador", "Venezuela"]);
opciones.push(["Dinamarca", "La Cruz Roja", "Suiza"]);
opciones.push(["Ciudad del Vaticano", "Roma", "Nepal"]);
opciones.push(["Croacia", "Bolivia", "Argentina"]);
opciones.push(["Japón", "Brasil", "Egipto"]);
opciones.push(["Marruecos", "Arabia", "Arabia Saudita"]);
opciones.push(["Holanda", "Ucrania", "Rusia"]);
opciones.push(["San Marino", "Haití", "España"]);
opciones.push(["Nueva Zelanda", "Noruega", "Irlanda"]);
opciones.push(["Italia", "Grecia", "Atenas"]);
opciones.push(["Bosnia", "Rumania", "Macedonia"]);

// Variables para controlar el nivel actual y la cantidad de aciertos.
let nivelActual = 0;
let cantidadAciertos = 0;

function comenzarJuego() {
  nivelActual = 0;
  cantidadAciertos = 0;
  document.getElementById("pantalla-inicial").style.display = "none";
  document.getElementById("pantalla-juego").style.display = "block";
  cargarBandera();
}

function cargarBandera() {
  if (nivelActual >= banderas.length) {
    terminarJuego();
  } else {
    limpiarOpciones();
    document.getElementById("imgBandera").src = "Imagenes/" + banderas[nivelActual];
    document.getElementById("n0").innerHTML = opciones[nivelActual][0];
    document.getElementById("n1").innerHTML = opciones[nivelActual][1];
    document.getElementById("n2").innerHTML = opciones[nivelActual][2];
  }
}

function limpiarOpciones() {
  for (let i = 0; i < 3; i++) {
    document.getElementById("n" + i).className = "nombre";
    document.getElementById("l" + i).className = "letra";
  }
}

function comprobarRespuesta(opElegida) {
  if (opElegida == correcta[nivelActual]) {
    document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
    document.getElementById("l" + opElegida).className = "letra letraAcertada";
    cantidadAciertos++;
  } else {
    document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
    document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
    document.getElementById("n" + correcta[nivelActual]).className = "nombre nombreAcertada";
    document.getElementById("l" + correcta[nivelActual]).className = "letra letraAcertada";
  }
  nivelActual++;
  setTimeout(cargarBandera, 1000);
}

function terminarJuego() {
  document.getElementById("pantalla-juego").style.display = "none";
  document.getElementById("pantalla-final").style.display = "block";
  document.getElementById("numCorrectas").innerHTML = cantidadAciertos;
  document.getElementById("numIncorrectas").innerHTML = banderas.length - cantidadAciertos;
}

function volverAlInicio() {
  document.getElementById("pantalla-final").style.display = "none";
  document.getElementById("pantalla-inicial").style.display = "block";
  document.getElementById("pantalla-juego").style.display = "none";
}
