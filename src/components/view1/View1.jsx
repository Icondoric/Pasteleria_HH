import React from 'react';
import './View1.css';
import Encabezado from './Encabezado';
import OfferCard from './OfferCard';
import Destacados from './Destacados'; // Agregado
import './Destacados.css'; // Agregado

const View1 = (props) => {
  const names = props.names;
  const informaciones = props.informaciones;

  return (
    <>
      <Encabezado />
      <OfferCard names={names} />
      <Destacados informaciones={informaciones} />
    </>
  );
};

export default View1;
