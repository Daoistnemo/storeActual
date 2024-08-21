function printDetails(id) {
    // Buscar el producto con el ID especificado
    const product = products.find((each) => each.id === parseInt(id, 10));
  
    // Crear una plantilla de detalles del producto
    const detailsTemplate = `
      <section class="product-images-block">
        <div class="product-images">
          <img
          class="mini-img"
          id="big-img"
          src="${product.imageSrc}"

        />
          <img
          class="mini-img"
          id="big-img"
          src="${product.imageSrc}"

        />
          <!-- Aquí puedes incluir las miniaturas de imágenes si es necesario -->
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
              ${product.colors.map(
                (color) => `<option value="${color}">${color}</option>`
              ).join("")}
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
                <img src="./assets/truck.png" alt="Truck"/>
              </span>
              <span class="policy-desc">
                Agrega el producto al carrito para conocer los costos de envío
              </span>
            </li>
            <li>
              <span class="policy-icon">
                <img src="./assets/plane.png" alt="Plane"/>
              </span>
              <span class="policy-desc">
                Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando envío normal
              </span>
            </li>
          </ul>
          <div class="checkout-process">
            <div class="top">
              <input type="number" min="1" value="1" />
              <button type="button" class="cart-btn">
                Añadir al Carrito
              </button>
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
  const id = params.get('id');
  
  // Llamar a la función printDetails con el ID capturado
  printDetails(id);
  