// /src/components/view3/TagPasteles.js
import React from 'react';
import './TagPasteles.css'; // Ajusta la ruta según la ubicación real de tus estilos

function TagPasteles(props) {
  const pastel = props.pastel;

  return (
    <div className="contenedor-api">
      <div className="text-container">
        <h2>{pastel.title}</h2>
        <p>{pastel.description}</p>
        <p>Precio: {pastel.precio}</p>
      </div>
      <div className="image-container">
        <img className="menu-item img" src={pastel.imgUrl} alt={pastel.title} />
      </div>
    </div>
  );
}

export default TagPasteles;
