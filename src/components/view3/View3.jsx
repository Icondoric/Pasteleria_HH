
import React from 'react';
import './View3.css';
import './Direcion.css';


const View3 = () => {
  return (
    <div className="views">

        <div className='iconosup'><svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.7778 28.3333L16.9444 21.5L23.7778 14.6667M42 21.5C42 10.1782 32.8218 1 21.5 1C10.1782 1 1 10.1782 1 21.5C1 32.8218 10.1782 42 21.5 42C32.8218 42 42 32.8218 42 21.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
        </div>
      <h2>Añadir Dirección</h2>
      <div className="map-container">
        <img src="mapa.png" alt="Mapa de la ubicación de la pastelería" />
      </div>
      <article>
      <section className='caja-Delivery'>
        <h2 className='Direc-Delivery'>Dirección de Delivery</h2>
        <form className='form'>
            <div className='form_group'>
              <input type="text" id='num' className='form_input' placeholder=' '/>
              <label htmlFor="name" className='form_label'>Dirección</label>
            </div>
        </form>
        <form className='form'>
            <div className='form_group'>
              <input type="numero" id='num' className='form_input' placeholder=' '/>
              <label htmlFor="name" className='form_label'>Numero</label>
            </div>
        </form>
        </section>
        <button className='bote'>Pago</button>
    </article>

    </div>
  );
};

export default View3;
