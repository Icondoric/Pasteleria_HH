
import React from 'react';
import './View1.css';

const View1 = () => {
  return (
    <div className="view">
      <h2>Bienvenido a la Pastelería Deliciosa</h2>
      <p>Descubre nuestros deliciosos productos de repostería hechos con amor y los mejores ingredientes.</p>
      <div className="featured-products">
        <h3>Productos Destacados</h3>
        <div className="product">
          <img src="cake1.jpg" alt="Pastel de Chocolate" />
          <p>Pastel de Chocolate</p>
          <p className="price">$19.99</p>
        </div>
        <div className="product">
          <img src="cupcake1.jpg" alt="Cupcake de Fresa" />
          <p>Cupcake de Fresa</p>
          <p className="price">$2.99</p>
        </div>

      </div>
      <div className="special-offers">
        <h3>Ofertas Especiales</h3>
        <div className="offer">
          <img src="special1.jpg" alt="Oferta Especial 1" />
          <p>¡Compra dos pasteles y obtén el tercero gratis!</p>
        </div>
        <div className="offer">
          <img src="special2.jpg" alt="Oferta Especial 2" />
          <p>Descuento del 20% en cupcakes esta semana.</p>
        </div>

      </div>
    </div>
  );
};

export default View1;
