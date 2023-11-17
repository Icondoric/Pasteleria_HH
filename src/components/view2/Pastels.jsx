import React from 'react'
import { pastel } from '../../assets/PastelesAPI'
function Pastels(props) {
    const pastel = props.pastel
  return (
    <div className='veizan'>
        <h2 className='dest'>Pasteles</h2>
        <article className='cuerpo'>
        <div className='cuerpo'>
            <div className='titulo'>
                {pastel[0].title}
            </div>
            <div>
                <div className='im'>
                    <img src= {pastel[0].imgurl} alt="a" />
                </div>
                <div className='descrp'>
                    {pastel[0].description}
                </div>
            </div>
            <div className='mod'>
                <div className='precio'>
                    {pastel[0].precio}
                </div>
                <button className='butt'>
                    <p>+</p>
                </button>
                </div>
            </div>
        </article>
        <article className='cuerpo'>
        <div className='cuerpo'>
            <div className='titulo'>
                {pastel[1].title}
            </div>
            <div>
                <div className='im'>
                    <img src= {pastel[1].imgurl} alt="a" />
                </div>
                <div className='descrp'>
                    {pastel[1].description}
                </div>
            </div>
            <div className='mod'>
                <div className='precio'>
                    {pastel[1].precio}
                </div>
                <button className='butt'>
                    <p>+</p>
                </button>
                </div>
            </div>
        </article>
        <article className='cuerpo'>
        <div className='cuerpo'>
            <div className='titulo'>
                {pastel[2].title}
            </div>
            <div>
                <div className='im'>
                    <img src= {pastel[2].imgurl} alt="a" />
                </div>
                <div className='descrp'>
                    {pastel[2].description}
                </div>
            </div>
            <div className='mod'>
                <div className='precio'>
                    {pastel[2].precio}
                </div>
                <button className='butt'>
                    <p>+</p>
                </button>
                </div>
            </div>
        </article>
        <article className='cuerpo'>
        <div className='cuerpo'>
            <div className='titulo'>
                {pastel[3].title}
            </div>
            <div>
                <div className='im'>
                    <img src= {pastel[3].imgurl} alt="a" />
                </div>
                <div className='descrp'>
                    {pastel[3].description}
                </div>
            </div>
            <div className='mod'>
                <div className='precio'>
                    {pastel[3].precio}
                </div>
                <button className='butt'>
                    <p>+</p>
                </button>
                </div>
            </div>
        </article>
    </div>
  )
}

export default Pastels;