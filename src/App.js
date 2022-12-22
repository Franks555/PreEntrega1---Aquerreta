import React from "react";
import Navbar from "./components/Navbar";
import Productos from "./components/Productos";
  
export default function App() {
  return (
    <div>
    <Navbar />
      <div className="listadoProductos">
        <Productos nombre="Cera automóvil" descripcion="Cera para terminación" precio={2000} />
        <Productos nombre="Antióxido" descripcion="Producto para revertir el óxido" precio={3000} />
        <Productos nombre="kit lavado" descripcion="Producto para lavar el vehículo" precio={4000} />
        <Productos nombre="Microfibra" descripcion="Diseñada para absorver líquido" precio={1200} />
      </div>
    </div>
  );
}