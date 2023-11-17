import React from 'react'
import { informaciones } from '../../assets/principalApi'
function Destacados(props) {
    const informaciones = props.informaciones
  return (
    <div>
        <h2 className='dest'>Destacados</h2>
        <article className='cuerpo'>
        <div className='cuerpo'>
            <div className='titulo'>
                {informaciones[0].title}
            </div>
            <div className='descrp'>
                {informaciones[0].description}
            </div>
            <div className='precio'>
                {informaciones[0].precio}
            </div>
            <div>
                <img src= {informaciones[0].imgurl} alt="a" />
            </div>
            <button className='butt'>
                <p>+</p>
            </button>
            </div>
        </article>
        <article className='cuerpo'>
        <div className='cuerpo'>
            <div className='titulo'>
                {informaciones[1].title}
            </div>
            <div className='descrp'>
                {informaciones[1].description}
            </div>
            <div className='precio'>
                {informaciones[1].precio}
            </div>
            <div>
                <img src= {informaciones[1].imgurl} alt="other" />
            </div>
            <button className='butt'>
                <p>+</p>
            </button>
            </div>
        </article>
        <article className='cuerpo'>
        <div className='cuerpo'>
            <div className='titulo'>
                {informaciones[2].title}
            </div>
            <div className='descrp'>
                {informaciones[2].description}
            </div>
            <div className='precio'>
                {informaciones[2].precio}
            </div>
            <div>
                <img src= {informaciones[2].imgurl} alt="other" />
            </div>
            <button className='butt'>
                <p>+</p>
            </button>
            </div>
        </article>
        <article className='cuerpo'>
        <div className='cuerpo'>
            <div className='titulo'>
                {informaciones[3].title}
            </div>
            <div className='descrp'>
                {informaciones[3].description}
            </div>
            <div className='precio'>
                {informaciones[3].precio}
            </div>
            <div>
                <img src= {informaciones[3].imgurl} alt="other" />
            </div>
            <button className='butt'>
                <p>+</p>
            </button> 
            </div>
        </article>
    </div>
  )
}

export default Destacados