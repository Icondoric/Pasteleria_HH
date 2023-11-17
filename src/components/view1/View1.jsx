import React from 'react';
import Destacados from './Destacados';
import'./View1.css'
function View1(props) {
  const informaciones = props.informaciones
  return (
    <Destacados informaciones = {informaciones}/>
  )
}

export default View1