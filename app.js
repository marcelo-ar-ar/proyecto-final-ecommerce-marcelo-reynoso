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

function alternarDescripcion(tarjeta, description, boton) {
  // 3a. Verificar si el párrafo de descripción ya existe dentro de la tarjeta
  const descripcionExistente = tarjeta.querySelector(".descripcion-producto");

  if (descripcionExistente) {
    // 3d. Si ya está visible, ocultarla (eliminarla del DOM)
    descripcionExistente.remove();
    boton.textContent = "Ver descripción";
  } else {
    // 3b. Si no está visible, crear el <p> con la descripción
    const parrafoDescripcion = document.createElement("p");
    parrafoDescripcion.classList.add("descripcion-producto");
    parrafoDescripcion.textContent = description;

    // 3c. Agregar el párrafo dentro de la tarjeta
    tarjeta.appendChild(parrafoDescripcion);
    boton.textContent = "Ocultar descripción";
  }
}

function mostrarProductos() {
  const contenedor = document.getElementById("contenedor-productos");

  const catalogo = generarProductos();
  const productoOferta = {
    id: 6,
    name: "Webcam Full HD",
    description: "Cámara web 1080p con enfoque automático y oferta especial",
    precio: 39000
  };
  const catalogoActualizado = [...catalogo, productoOferta];

  catalogoActualizado.forEach(({ name, precio, description }) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("card");

    const titulo = document.createElement("h3");
    titulo.textContent = name;

    const parrafoPrecio = document.createElement("p");
    parrafoPrecio.classList.add("precio-producto");
    parrafoPrecio.textContent = `$${precio}`;

    // 1. Crear botón pequeño con el texto "Ver descripción"
    const botonDescripcion = document.createElement("button");
    botonDescripcion.type = "button";
    botonDescripcion.classList.add("btn-descripcion");
    botonDescripcion.textContent = "Ver descripción";

    // 2. Registrar el evento clic con addEventListener
    botonDescripcion.addEventListener("click", () => {
      alternarDescripcion(tarjeta, description, botonDescripcion);
    });

    tarjeta.appendChild(titulo);
    tarjeta.appendChild(parrafoPrecio);
    tarjeta.appendChild(botonDescripcion);

    contenedor.appendChild(tarjeta);
  });
}

document.addEventListener("DOMContentLoaded", mostrarProductos);
