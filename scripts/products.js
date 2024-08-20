// Definir la clase Product
class Product {
    constructor(title, description, price, discount, imageSrc) {
      this.title = title;
      this.description = description;
      this.price = price;
      this.discount = discount;
      this.imageSrc = imageSrc;
    }
  }
  
  // Crear instancias de la clase Product
  const product1 = new Product('iPad Pro 12.9', 'Silver', '$900,000', '50% Off', 'https://i.postimg.cc/kX8PKZpq/ipad2.jpg');
  const product2 = new Product('iPhone 13', 'Blue', '$800,000', '20% Off', 'https://tiendasishop.com/media/catalog/product/m/l/mlq63lz_a.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700');
  const product3 = new Product('MacBook Air', 'Space Gray', '$1,200,000', '10% Off', 'https://tiendasishop.com/media/catalog/product/m/a/macbook_air_15_in_m2_midnight_pdp_image_position_1_coes_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700');
  const product4 = new Product('Apple Watch Series 7', 'Green', '$400,000', '15% Off', 'https://tiendasishop.com/media/catalog/product/w/a/watch_s9_gps_41mm_midnight_aluminum_midnight_sport_band_pdp_image_position-1__coes_2.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700');
  const product5 = new Product('AirPods Pro', 'White', '$250,000', '25% Off', 'https://tiendasishop.com/media/catalog/product/a/i/airpods_pro_2nd_gen_pdp_image_position-1__usen.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&dpr=1%201x');
  const product6 = new Product('iMac 24"', 'Pink', '$1,500,000', '5% Off', 'https://tiendasishop.com/media/catalog/product/i/m/imac_m3_2-ports_pink_pdp_image_position_1__coes.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700');
  
  // Array con todas las instancias de Product
  const products = [product1, product2, product3, product4, product5, product6];
  