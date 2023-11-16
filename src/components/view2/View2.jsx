
import React from 'react';
import './View2.css';

// const View2 = (props) => {
//   const pastel=props.pastel;
//   const theme=cars.theme;
//   return (
//     // <div className="view">
//     //   <h2>Pasteles</h2>
//     //   <div className="menu-items">
//     //     <div className="menu-item">
//     //       <img src="cake2.jpg" alt="Pastel de Vainilla" />
//     //       <p>Pastel de Vainilla</p>
//     //       <p className="price">$24.99</p>
//     //     </div>
//     //   </div>
//     // </div>

//   )
// }
function View2(props) 
{
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

export default View2;
