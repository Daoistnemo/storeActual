// Suponiendo que el array de productos está disponible en este archivo
class Product {
  constructor(title, description, price, discount, imageSrc, id, colors, images) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.discount = discount;
    this.imageSrc = imageSrc;
    this.id = id;
    this.colors = colors || []; // Array de colores
    this.images = images || []; // Array de imágenes
  }
}

// Crear instancias de la clase Product
const product1 = new Product('iPad Pro 12.9', 'El iPad Pro de 12.9 pulgadas (6ta generación) es la última iteración de la gama alta de tablets de Apple, destacándose por su combinación de potencia, diseño y versatilidad. Esta generación continúa la tradición de ofrecer una experiencia de usuario excepcional con mejoras significativas en rendimiento y funcionalidad.', '$900,000', '50% Off', 'https://i.postimg.cc/kX8PKZpq/ipad2.jpg', 1, ['Silver', 'Space Gray'], ['https://mac-center.com.pe/cdn/shop/files/iPad_Pro_Wi-Fi_12-9_in_6th_generation_Silver_PDP_Image_Position-7_COES.jpg?v=1700284078&width=1445']);
const product2 = new Product('iPhone 13', 'El iPhone 13 es el último modelo en la línea de smartphones de Apple, ofreciendo una combinación de rendimiento avanzado, diseño elegante y capacidades mejoradas que continúan consolidando su posición en el mercado de teléfonos inteligentes.', '$800,000', '20% Off', 'https://tiendasishop.com/media/catalog/product/m/l/mlq63lz_a.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700', 2, ['Silver', 'Space Gray', 'Black', 'Green'], ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdpoyjBgHCnoBB_h0iEjz_elyCBAARSB9G3A&s']);
const product3 = new Product('MacBook Air', 'El MacBook Air es una de las computadoras portátiles más emblemáticas de Apple, conocida por su diseño delgado, ligero y elegante. Este modelo está diseñado para proporcionar un equilibrio ideal entre portabilidad y rendimiento, convirtiéndolo en una opción popular para profesionales y estudiantes por igual.', '$1,200,000', '10% Off', 'https://tiendasishop.com/media/catalog/product/m/a/macbook_air_15_in_m2_midnight_pdp_image_position_1_coes_1.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700', 3, ['Silver', 'Space Gray', 'Black', 'Green'], ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHNgLN2QXp0z9i4DUsJrp09a_pG3N8ogj_eeExSdqi0YiIDV0h6PjnXSbl8RTNrKpseyQ&usqp=CAU']);
const product4 = new Product('Apple Watch Series 7', 'El Apple Watch Series 7 es una de las versiones más avanzadas del icónico smartwatch de Apple, combinando un diseño refinado con características de última tecnología. Este modelo destaca por su pantalla más grande, mayor durabilidad y una gama mejorada de funciones de salud y bienestar.', '$400,000', '15% Off', 'https://tiendasishop.com/media/catalog/product/w/a/watch_s9_gps_41mm_midnight_aluminum_midnight_sport_band_pdp_image_position-1__coes_2.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700', 4, ['Silver', 'Space Gray', 'Black', 'Green', 'Red'], ['https://blockstore.pe/cdn/shop/files/AppleWatchSeries745mm-GPS-Green.jpg?v=1690508605']);
const product5 = new Product('AirPods Pro', 'Los AirPods de Apple son auriculares inalámbricos que combinan comodidad, tecnología avanzada y una experiencia auditiva superior. Desde su lanzamiento, los AirPods se han convertido en uno de los productos más populares en la categoría de auriculares, destacando por su diseño elegante y su integración perfecta con el ecosistema de Apple.', '$250,000', '25% Off', 'https://tiendasishop.com/media/catalog/product/a/i/airpods_pro_2nd_gen_pdp_image_position-1__usen.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700&dpr=1%201x', 5, ['Silver', 'Space Gray', 'Black', 'White', 'Pink'], ['https://i0.wp.com/www.ear-fidelity.com/wp-content/uploads/2022/10/P1054788s-scaled.jpg?fit=2560%2C1707&ssl=1']);
const product6 = new Product('iMac 24"', 'El iMac de 24 pulgadas es una elegante y potente computadora todo-en-uno de Apple, diseñada para ofrecer un rendimiento excepcional en un formato compacto y estéticamente atractivo. Introducido con el chip M1 de Apple, el iMac de 24" combina diseño innovador con capacidades avanzadas, siendo una excelente opción tanto para usuarios profesionales como para aquellos que buscan una computadora de alto rendimiento en su hogar.', '$1,500,000', '5% Off', 'https://tiendasishop.com/media/catalog/product/i/m/imac_m3_2-ports_pink_pdp_image_position_1__coes.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700', 6, ['Silver', 'Space Gray', 'Black', 'Green', 'Blue'], ['https://clicprint.pe/wp-content/uploads/2024/02/iMac_24-in_Blue_2-port_PDP_Image_Position-3_MXLA-jpg.webp']);

  // Array con todas las instancias de Product
  const products = [product1, product2, product3, product4, product5, product6];
  