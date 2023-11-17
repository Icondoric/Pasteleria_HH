import React from 'react';
import './View2.css';
import Encabezado from './Encabezado';
import Pastels from './Pastels'; 
import './Pastels.css'; 

const View2 = (props) => {
  const names = props.names;
  const pastel = props.pastel;

  return (
    <>
      <Encabezado />
      <Pastels pastel={pastel} />
    </>
  );
};

export default View2;
