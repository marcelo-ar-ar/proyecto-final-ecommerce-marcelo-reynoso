function generarProductos() {
  const productos = [
    {
      id: 1,
      name: "Teclado Mecánico",
      description: "Teclado compacto con switches táctiles",
      precio: 45000
    },
    {
      id: 2,
      name: "Mouse Inalámbrico",
      description: "Mouse ergonómico de 6 botones con receptor USB",
      precio: 22000
    },
    {
      id: 3,
      name: "Monitor 24 pulgadas",
      description: "Panel IPS Full HD a 75 Hz",
      precio: 185000
    },
    {
      id: 4,
      name: "Auriculares con Micrófono",
      description: "Diadema cerrada ideal para videollamadas y estudio",
      precio: 34000
    },
    {
      id: 5,
      name: "Hub USB-C",
      description: "Adaptador multipuerto con HDMI, USB 3.0 y carga PD",
      precio: 29500
    }
  ];

  return productos;
}

function mostrarProductos() {
  // 3. Acceder al contenedor creado en el HTML
  const contenedor = document.getElementById("contenedor-productos");

  // Obtenemos el catálogo completo (incluyendo el producto en oferta)
  const catalogo = generarProductos();
  const productoOferta = {
    id: 6,
    name: "Webcam Full HD",
    description: "Cámara web 1080p con enfoque automático y oferta especial",
    precio: 39000
  };
  const catalogoActualizado = [...catalogo, productoOferta];

  // 4. Recorrer el array de productos
  catalogoActualizado.forEach(({ name, precio }) => {
    // 5a. Crear el div de la tarjeta y asignarle la clase .card
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("card");

    // 5b. Crear el <h3> para el nombre del producto
    const titulo = document.createElement("h3");
    titulo.textContent = name;

    // 5b. Crear el <p> para el precio
    const parrafoPrecio = document.createElement("p");
    parrafoPrecio.textContent = `$${precio}`;

    // Insertar título y precio dentro de la tarjeta
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(parrafoPrecio);

    // 6. Insertar la tarjeta dentro del contenedor principal
    contenedor.appendChild(tarjeta);
  });
}

// 2. Ejecutar automáticamente al cargar la página
document.addEventListener("DOMContentLoaded", mostrarProductos);
