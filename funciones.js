function consola() {
  console.log("Esto es un mensaje en la consola del navegador 💻");
  mostrar("Se envió un mensaje a la consola.");
}

function mostrarNombre() {
  const nombre = document.getElementById("nombre").value || "Anónimo";
  mostrar(`Tu nombre es <strong>${nombre}</strong>.`);
}

function leerDatos() {
  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  if (!nombre || !edad) {
    mostrar("⚠️ Por favor ingresa tu nombre y edad.");
    return;
  }
  mostrar(`Nombre: ${nombre}, Edad: ${edad}`);
}

function saludar() {
  const nombre = document.getElementById("nombre").value || "Amigo";
  const edad = parseInt(document.getElementById("edad").value) || 0;
  mostrar(`👋 Hola ${nombre}, tienes ${edad} años.`);
}

function sumar() {
  const n1 = parseFloat(document.getElementById("num1").value) || 0;
  const n2 = parseFloat(document.getElementById("num2").value) || 0;
  mostrar(`La suma de ${n1} + ${n2} = <strong>${n1 + n2}</strong>`);
}

function paises() {
  const lista = ["Colombia", "México", "Argentina", "Chile", "España"];
  mostrar("🌎 Países disponibles: " + lista.join(", "));
}

function metodos() {
  const texto = "javascript es genial";
  mostrar(`
    Texto: ${texto}<br>
    En mayúsculas: ${texto.toUpperCase()}<br>
    Longitud: ${texto.length}<br>
    Incluye 'genial': ${texto.includes("genial")}
  `);
}

function areaTriangulo() {
  const base = parseFloat(prompt("Ingrese la base del triángulo:"));
  const altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
  if (isNaN(base) || isNaN(altura)) {
    mostrar("⚠️ Debes ingresar valores numéricos válidos.");
    return;
  }
  const area = (base * altura) / 2;
  mostrar(`El área del triángulo es: <strong>${area}</strong>`);
}

function cambiarColor() {
  const colores = ["#f8e1f4", "#d4f8e8", "#e4f0f6", "#fff3cd", "#ffe6e6"];
  const color = colores[Math.floor(Math.random() * colores.length)];
  document.body.style.background = color;
  mostrar(`🎨 Fondo cambiado a ${color}`);
}

function limpiar() {
  document.getElementById("resultado").innerHTML = "Aquí aparecerán los resultados...";
  document.getElementById("nombre").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
}

// Función auxiliar para mostrar resultados en el DOM
function mostrar(mensaje) {
   const resultado = document.getElementById("resultado");
  resultado.innerHTML = mensaje;
  resultado.style.opacity = 0;
  setTimeout(() => {
    resultado.style.transition = "opacity 0.5s ease";
    resultado.style.opacity = 1;
  }, 100);
}