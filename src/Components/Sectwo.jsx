import React from 'react'
import { sectwo } from '../data'

const Sectwo = () => {
  return (
    <>
      <section  className='sectwo'>
        {sectwo.map((data)=>{
            const {id, image, title, text} = data
            return (
                <div className='payment' key={id}>
                    <img className='icon' src={image} alt="Cardonic" />
                    <h3 className='instant'>{title}</h3>
                    <p className='instant-text'>{text}</p>
                </div>
            )
        })}
      </section>
      <p className='register'>Register now</p>
    </>
  )
}

export default Sectwo
