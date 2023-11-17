import React from 'react';
import Destacados from './Destacados';
import'./Destacados.css'
function View1(props) {
  const informaciones = props.informaciones
  return (
    <Destacados informaciones = {informaciones}/>
  )
}

export default View1