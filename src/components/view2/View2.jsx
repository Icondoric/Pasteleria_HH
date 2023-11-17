// /src/components/view3/View3.js
import React from 'react';
import './View2.css';
import TagPasteles from '../view2/TagPasteles';
import { pastel } from '../../assets/PastelesAPI'; // Ajusta la ruta según la ubicación real de tus datos

const View2 = () => {
  return (
    <div className="view">
      {/* Sección superior (pasteles) */}
      <div className="top-section">
        <div className="top-images">
          <img src="/public/top/back.png" alt="Botón de Retroceso" className="back-button" />
          <img src="/public/top/Pastelito.png" alt="Pastelito Logo" className="logo" />
        </div>
      </div>

      {/* Sección de la API (pasteles) al final */}
      <div className="api-section">
        {pastel.map((pastel, index) => (
          <TagPasteles key={index} pastel={pastel} />
        ))}
      </div>

      {/* Sección "Contacto y Ubicación" */}
      <div className="bottom-section">
        <h2>Contacto y Ubicación</h2>
        {/* ... (contenido de la sección de "Contacto y Ubicación") */}
      </div>
    </div>
  );
};

export default View2;
