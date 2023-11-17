
import React from 'react';
import './View3.css';
import './Direcion.css';


const View3 = () => {
  return (
    
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
    
  );
};

export default View3;
