// Selecciona el elemento de navegación usando el id "nav"
const navSelector = document.getElementById("nav");

// Define un array de opciones para los botones de navegación
const options = [
  { title: "Ofertas de la semana", linkTo: "./outlet.html" },
  { title: "Como comprar", linkTo: "./how.html" },
  { title: "Costos y Tarifas", linkTo: "./taxs.html" },
  { title: "Mis pedidos", linkTo: "./orders.html" },
  { title: "Garantía", linkTo: "./warranty.html" },
];

// Crea y agrega los elementos de navegación al navSelector
for (let option of options) {
  const anchor = document.createElement("a");
  anchor.className = "nav-button"; // Clase CSS para los botones de navegación
  anchor.textContent = option.title; // Texto del botón
  anchor.href = option.linkTo; // Enlace al que el botón dirigirá
  navSelector.appendChild(anchor); // Agrega el botón al contenedor de navegación
}

// Obtén todos los elementos con la clase "nav-button"
const navS = document.getElementsByClassName("nav-button");

// Cambia el estilo de los elementos con la clase "nav-button"
for (let i = 0; i < navS.length; i++) {
  navS[i].style.color = "#ffffff"; // Cambia el color del texto a blanco
  navS[i].style.padding = "10px 20px"; // Cambia el padding para hacer los botones más grandes
  navS[i].style.textDecoration = "none"; // Elimina el subrayado del enlace
  navS[i].style.borderRadius = "5px"; // Redondea las esquinas de los botones
  navS[i].style.fontSize = "15px";
}

// --------------------------------------------------------------------------------------
/// Selecciona el elemento del pie de página usando el id "footer"
const footerSelector = document.getElementById("footer");

// Define las opciones para el pie de página, ahora con la propiedad "opts"
const options1 = [
  { title: "Categorías", linkTo: "#categorias", opts: ["Laptops", "Audio", "Auriculares"] },
  { title: "Compra", linkTo: "#compra", opts: ["Formas de pago", "Envíos", "Devoluciones"] },
  { title: "Costos y Tarifas", linkTo: "#costos-tarifas", opts: ["Impuestos", "Facturación"] },
  { title: "Mis pedidos", linkTo: "#mis-pedidos", opts: ["Pedir nuevamente", "Lista de deseos"] },
  { title: "Garantía", linkTo: "#garantia", opts: ["Pide garantía causa"] },
];

for (const option of options1) {
    // Crear contenedor para cada columna
    const column = document.createElement("div");
    column.className = "footer-column"; 
    
    // Crear y añadir título
    const title = document.createElement("h3");
    const titleLink = document.createElement("a");
    titleLink.href = option.linkTo;
    titleLink.textContent = option.title;
    title.appendChild(titleLink);
    column.appendChild(title);
    
    // Crear y añadir opciones
    for (const opt of option.opts) {
      if (opt) { // Solo agregar opciones no vacías
        const item = document.createElement("p");
        const itemLink = document.createElement("a");
        itemLink.href = "#"
        itemLink.textContent = opt;
        item.appendChild(itemLink);
        column.appendChild(item);
      }
    }
    
    // Agregar la columna al contenedor del pie de página
    footerSelector.appendChild(column);
  }
  
  