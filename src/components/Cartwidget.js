import React from 'react';
import './styles/cartwidget.css';
import { FiShoppingCart } from 'react-icons/fi';

const CartWidget = () => {
    return (
      <div className="carrito_compras">
        <FiShoppingCart size={22} color="#01122E" />
        <div className="items_compra">2 </div>
      </div>
    );
  };
  
  export default CartWidget;