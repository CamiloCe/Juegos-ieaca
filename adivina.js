// Arreglo que guarda las imágenes de las banderas. Este será el orden en que se mostrarán.
let banderas = ["ga.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png"];

// Arreglo que guarda la opción correcta para cada nivel.
let correcta = [0, 2, 1, 1, 0, 2, 0, 1, 0, 2,1];

// Arreglo que guarda los países a mostrar en cada nivel.
let opciones = [];
opciones.push(["Gato con botas", "Pancho", "Burro"]);
opciones.push(["Fiona", "Yepeto", "Shrek"]);
opciones.push(["Musculoso", "Mordecai", "Skips"]);
opciones.push(["Tomate","Brócoli", "Apio"]);
opciones.push(["Vaca", "Toro", "Ternero"]);
opciones.push(["Azúl", "Rojo", "Verde"]);
opciones.push(["Libros", "Cuaderno", "libretas"]);
opciones.push(["La Bella y la Bestia", "Blancanieves", "Cenicienta"]);
opciones.push(["Los tres cerditos", "Los tres hermanos", "Ricitos de oro"]);
opciones.push(["Hipopótamo", "Camello", "Tigre"]);
opciones.push(["Rinoceronte", "Elefante", "Perro"]);


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
