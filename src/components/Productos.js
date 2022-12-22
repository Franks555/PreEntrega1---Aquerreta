import React from "react";

function Productos(props) {
  return (
    <div className="productoItem">
      <h1 className="nombreProducto">{props.nombre}</h1>
      <p className="descripcionProducto">{props.descripcion}</p>
      <h2>Precio</h2>
      <h3 className="precioProducto">{props.precio}</h3>
    </div>
  );
}
 
export default Productos;