
import React from 'react';
import './View3.css';
function TagPasteles(props) {
  const pastel=props.pastel;
  const theme=pastel.theme;
  console.log(theme)
  return(
    <section className="View">
      <div className='menu-items'>
      <img className='menu-item img' src={pastel.imgUrl} alt={pastel.title} />
      <h2>{pastel.title}</h2>
      <p>{pastel.description}</p>
      </div>
    </section>
  )
}
export default TagPasteles;