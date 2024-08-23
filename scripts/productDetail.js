function printDetails(id) {
  // Buscar el producto con el ID especificado
  const product = products.find((each) => each.id === parseInt(id, 10));

  if (!product) {
    console.error("Producto no encontrado");
    return;
  }

  // Crear una plantilla de detalles del producto
  const detailsTemplate = `
    <section class="product-images-block">
      <div class="product-images">
        ${product.images
          .map(
            (image) => `
          <img
            class="mini-img"
            src="${image}"
            alt="${product.title}"
            onclick="changeMini(event)"
          />
          <img
            class="mini-img"
            src="${product.imageSrc}"
            alt="${product.title}"
            onclick="changeMini(event)"
          />
        `
          )
          .join("")}
      </div>
      <img
        class="big-img"
        id="big-img"
        src="${product.imageSrc}"
        alt="${product.title}"
      />
    </section>
    <div class="product-description-block">
      <h1 class="product-title">${product.title}</h1>
      <form class="product-selector">
        <fieldset class="product-fieldset">
          <label class="product-label" for="color">Color</label>
          <select class="product-select" id="color">
            ${product.colors
              .map((color) => `<option value="${color}">${color}</option>`)
              .join("")}
          </select>
        </fieldset>
      </form>
      <div class="product-description">
        <span class="product-label">Descripción</span>
        <p>${product.description}</p>
      </div>
    </div>
    <div class="product-checkout-block">
      <div class="checkout-container">
        <span class="checkout-total-label">Total:</span>
        <h2 id="price" class="checkout-total-price">${product.price}</h2>
        <p class="checkout-description">
          Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
          50711 haciendo la solicitud en AFIP.
        </p>
        <ul class="checkout-policy-list">
          <li>
            <span class="policy-icon">
              <img src="./assets/truck.png" alt="Camión"/>
            </span>
            <span class="policy-desc">
              Agrega el producto al carrito para conocer los costos de envío
            </span>
          </li>
          <li>
            <span class="policy-icon">
              <img src="./assets/plane.png" alt="Avión"/>
            </span>
            <span class="policy-desc">
              Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal
            </span>
          </li>
        </ul>
        <div class="checkout-process">
          <div class="top">
            <input type="number" min="1" id="quantity-${id}" value="1" onchange="changeSubtotal(event)" />
            <button type="button" class="cart-btn" onclick="saveProduct(${id})">Añadir al Carrito</button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Seleccionar el elemento donde se mostrará la plantilla
  const detailsSelector = document.querySelector("#details");

  // Actualizar el HTML del elemento seleccionado con la plantilla
  detailsSelector.innerHTML = detailsTemplate;
}

// Capturar el parámetro ID de la URL
const query = location.search;
const params = new URLSearchParams(query);
const id = params.get("id");

// Llamar a la función printDetails con el ID capturado
printDetails(id);

// Función para cambiar la imagen grande
function changeMini(event) {
  const selectedSrc = event.target.src;
  const bigImgSelector = document.querySelector("#big-img");
  if (bigImgSelector) {
    bigImgSelector.src = selectedSrc;
  } else {
    console.error("No se encontró el elemento con ID 'big-img'");
  }
}

function changeSubtotal(event) {
  // Obtener la cantidad de productos desde el evento
  const quantity = parseInt(event.target.value, 10);
  console.log("Cantidad:", quantity); // Depura la cantidad

  // Verificar que la cantidad es válida
  if (isNaN(quantity) || quantity <= 0) {
    console.error("Cantidad no válida");
    return;
  }

  // Buscar el producto con el ID especificado
  const id = new URLSearchParams(location.search).get("id");
  const product = products.find((each) => each.id === parseInt(id, 10));

  if (!product) {
    console.error("Producto no encontrado");
    return;
  }

  // Verificar que el precio del producto sea un número
  const price = parseFloat(product.price);
  console.log("Precio del producto:", price); // Depura el precio

  if (isNaN(price)) {
    console.error("Precio no válido");
    return;
  }

  // Calcular el subtotal
  const subtotal = quantity * price;

  // Seleccionar la etiqueta donde se renderiza el subtotal
  const priceElement = document.querySelector("#price");

  if (priceElement) {
    priceElement.textContent = `$${subtotal.toFixed(2)}`;
  } else {
    console.error("No se encontró el elemento con ID 'price'");
  }
}
// Actividad 1.
// function saveProduct(id) {
//   const found = products.find((each) => each.id === id);
//   const product = {
//     id: id,
//     title: found.title,
//     price: found.price,
//     image: found.images[0],
//     color: document.querySelector("#color").value,
//     quantity: document.querySelector("#quantity-" + id).value,
//   };
//   const stringifyProduct = JSON.stringify(product);
//   localStorage.setItem("cart", stringifyProduct);
// }


//----------------------------------------------------------------------------------------


function saveProduct(id) {
  // Buscar el producto con el ID proporcionado en el array de productos
  const found = products.find((each) => each.id === id);

  if (!found) {
    console.error("Producto no encontrado");
    return;
  }

  // Crear un objeto con la información del producto que se va a guardar
  const newProduct = {
    id: id,
    title: found.title,
    price: found.price,
    image: found.images[0], // Asumimos que la primera imagen es la principal
    color: document.querySelector("#color").value, // Obtener el color seleccionado del formulario
    quantity: document.querySelector("#quantity-" + id).value, // Obtener la cantidad seleccionada del formulario
  };

  // Obtener el carrito del localStorage, si existe
let cart = localStorage.getItem('cart');

if (cart) {
  // Intenta parsear el carrito
  cart = JSON.parse(cart);
  // Verifica si el carrito es un array; si no, inicialízalo como un array vacío
  if (!Array.isArray(cart)) {
    cart = [];
  }
} else {
  // Si no hay carrito en el localStorage, inicialízalo como un array vacío
  cart = [];
}


  // Agregar el nuevo producto al carrito
  cart.push(newProduct);

  // Guardar el carrito actualizado en el localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
}


function clearAllLocalStorage() {
  localStorage.clear();
  console.log("Todo el localStorage ha sido eliminado.");
}

// clearAllLocalStorage();