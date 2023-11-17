// /src/components/view3/View3.js
import React from 'react';
import './View3.css';
import TagPasteles from './TagPasteles';
import { pastel } from '../../assets/PastelesAPI'; // Ajusta la ruta según la ubicación real de tus datos

const View3 = () => {
  return (
    <div className="view">
      {/* Sección superior (pasteles) */}
      <div className="top-section">
        <div className="top-images">
          <img src="/public/top/back.png" alt="Botón de Retroceso" className="back-button" />
          <img src="/public/top/Pastelito.png" alt="Pastelito Logo" className="logo" />
        </div>
        {pastel.map((pastel, index) => (
          <TagPasteles key={index} pastel={pastel} />
        ))}
      </div>

      {/* Sección inferior */}
      <div className="bottom-section">
        <h2>Contacto y Ubicación</h2>
        {/* Agrega el contenido adicional de la sección inferior aquí */}
      </div>
    </div>
  );
};

export default View3;
