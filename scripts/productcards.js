// Seleccionar el contenedor de productos
const productsSelector = document.getElementById("products");

// Definir el template para las tarjetas de productos
let productsTemplate = `
  ${products.map(product => `
    <article class="product-card">
      <img class="product-img" src="${product.imageSrc}" alt="${product.title}" />
      <div class="product-info">
        <span class="product-title">${product.title}</span>
        <span class="product-description">${product.description}</span>
        <div class="product-price-block">
          <span class="product-price">${product.price}</span>
          <span class="product-discount">${product.discount}</span>
        </div>
        <div class="product-tax-policy">
          Incluye impuesto País y percepción AFIP
        </div>
      </div>
    </article>
  `).join('')}
`;

// Insertar el template en el contenedor de productos
productsSelector.innerHTML = productsTemplate;
