import React from 'react'
import { secfive } from '../data'
import underline from './Cardonic-images/underline.svg'



const Secfive = () => {
  return (
    <>
      <section className='section-five'>
        <div>
            {secfive.map((data)=>{
                const {id, title, text, reg, google, apple, img} = data
                return(
                    <div className="secfive" key={id}>
                        <div className='secfive-left'>
                            <h1 className='secfive-title'>{title}</h1>
                            <img className='download-underline' src={underline} alt="Cardonic" />                  
                            <p className='secfive-text'>{text}</p>
                            <p className='register-now'>{reg}</p>
                        </div>
                        <div className='line'></div>
                        <div className='secfive-right'>
                        <div className='download-img'>
                            <img src={google} alt="Cardonic" />
                            <img src={apple} alt="Cardonic" />
                        </div>
                        <img className='secfive-img' src={img} alt="Cardonic" />
                        </div>
                    </div>
                )
            })}
        </div>
      </section>
    </>
  )
}

export default Secfive
