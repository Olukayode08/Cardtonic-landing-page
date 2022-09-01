import React from 'react'
import { secfour } from '../data'
import underline from './Cardonic-images/underline.svg'


const Secfour = () => {
  return (
    <>
    <section className='partner-section'>
      <section className='section-four'>
        {secfour.map((data)=>{
            const {id, title, text, image, apply, limited} = data
            return(
                <div className='secfour' key={id}>
                    <div className='partner'>
                        <p className='partner-text'>{text}</p>
                        <img className='underline-become' src={underline} alt="Cardonic" />
                        <div className='line'></div>
                        <h3 className='partner-title'>{title}</h3>
                    </div>
                    <img className='partner-img' src={image} alt="Cardonic" />
                    <p className='apply-now'>{apply}</p>
                    <p className='limited'>{limited}</p>
                </div>
            )
        })}
      </section>
    </section>

    </>
  )
}

export default Secfour
