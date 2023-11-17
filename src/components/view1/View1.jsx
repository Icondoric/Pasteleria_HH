// Archivo combinado View1.js

import React from 'react';
import './View1.css';
import Encabezado from './Encabezado';
import OfferCard from './OfferCard';

const View1 = (props) => {
  const names = props.names;

  return (
    <>
      <Encabezado />
      <OfferCard names={names} />
    </>
  );
};

export default View1;
