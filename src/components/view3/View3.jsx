
import React from 'react';
import './View3.css';
import './Direcion.css';


const View3 = () => {
  return (
<<<<<<< HEAD
    
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
    
=======
    <div className="view">
      <div className="top-images">
        <img src="/top/back.png" alt="Back" className="back-image" />
        <img src="/top/Pastelito.png" alt="Pastelito" className="pastelito-image" />
      </div>
      <h2>Pasteles</h2>
      <p>¡Visítanos en nuestra pastelería! Contáctanos para hacer pedidos personalizados o para obtener más información sobre nuestros productos.</p>
      <div className="contact-info">
        <p>Dirección: Calle de la Pastelería, 123</p>
        <p>Teléfono: 123-456-7890</p>
        <p>Email: info@pasteleriadeliciosa.com</p>
      </div>
      <div className="map-container">
        {/* Aquí puedes integrar un mapa interactivo o una imagen del mapa de tu ubicación */}
        <img src="map.jpg" alt="Mapa de la ubicación de la pastelería" />
      </div>
    </div>
>>>>>>> e4a2f21 (Cambio en css)
  );
};

export default View3;