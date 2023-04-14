const express = require('express');
const app = express();

const PORT = 5000;

const clientes = [
  {
    id: 1,
    nombre: "Brigit",
    direccion: "san jose",
    telefono: "11111511"
  },
  {
    id: 2,
    nombre: "Yanela",
    direccion: "Santa anita",
    telefono: "22222222"
  },
  {
    id: 3,
    nombre: "Diego",
    direccion: "San miguel",
    telefono: "33333333"
  }
];

const productos = [
  {
    id: 1,
    nombre: "Laptop",
    marca: "MarcaDell",
    precio: "10.00"
  },
  {
    id: 2,
    nombre: "Maus",
    marca: "Dell",
    precio: "20.00"
  },
  {
    id: 3,
    nombre: "Monitor",
    marca: "aoc",
    precio: "30.00"
  }
];

app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi aplicación Express -Brigit Trujillo Flores!');
});

app.get('/clientes', (req, res) => {
  const tableRows = clientes.map(cliente => {
    return `<tr><td>${cliente.id}</td><td>${cliente.nombre}</td><td>${cliente.direccion}</td><td>${cliente.telefono}</td></tr>`;
  }).join('');
  
  const table = `
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Dirección</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table>
  `;
  
  res.send(table);
});

app.get('/productos', (req, res) => {
  const tableRows = productos.map(producto => {
    return `<tr><td>${producto.id}</td><td>${producto.nombre}</td><td>${producto.marca}</td><td>${producto.precio}</td></tr>`;
  }).join('');
  
  const table = `
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Marca</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table>
  `;
  
  res.send(table);
});

app.listen(PORT, () => {
  console.log(`Servidor Express ejecutándose en el puerto ${PORT}`);
});
