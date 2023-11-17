
import React from 'react';
import './View3.css';

const View3 = () => {
  return (
    <div className="view">
      <div className="top-images">
        <img src="/top/back.png" alt="Back" className="back-image" />
        <img src="/top/Pastelito.png" alt="Pastelito" className="pastelito-image" />
      </div>
      <h2>Pasteles</h2>
      <p>¡Visítanos en nuestra pastelería! Contáctanos para hacer pedidos personalizados o para obtener más información sobre nuestros productos.</p>
      <div className="contact-info">
        <p>Dirección: Calle de la Pastelería, 123</p>
        <p>Teléfono: 123-456-7890</p>
        <p>Email: info@pasteleriadeliciosa.com</p>
      </div>
      <div className="map-container">
        {/* Aquí puedes integrar un mapa interactivo o una imagen del mapa de tu ubicación */}
        <img src="map.jpg" alt="Mapa de la ubicación de la pastelería" />
      </div>
    </div>
  );
};

export default View3;