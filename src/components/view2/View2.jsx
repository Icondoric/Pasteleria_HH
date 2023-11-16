
import React from 'react';
import './View2.css';

const View2 = () => {
  return (
    <div className="view">
      <h2>Nuestro Menú</h2>
      <p>Descubre la deliciosa variedad de productos en nuestro menú. Desde pasteles exquisitos hasta cupcakes irresistibles, ¡tenemos algo para todos los amantes de los postres!</p>
      <div className="menu-items">
        <div className="menu-item">
          <img src="cake2.jpg" alt="Pastel de Vainilla" />
          <p>Pastel de Vainilla</p>
          <p className="price">$24.99</p>
        </div>
        <div className="menu-item">
          <img src="cupcake2.jpg" alt="Cupcake de Chocolate" />
          <p>Cupcake de Chocolate</p>
          <p className="price">$3.99</p>
        </div>

      </div>
    </div>
  );
};

export default View2;
