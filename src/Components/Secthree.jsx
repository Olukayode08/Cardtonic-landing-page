import React, {useState, useEffect} from 'react'
import {secthree} from '../data'
import Slider from './Slider'
import underline from './Cardonic-images/underMark.svg'

const Secthree = () => {
  return (
    <>
    <div className='no-wastage'>
        <div className='section-three'>
            <div className='secthree'>
                <h1 className='waste-title'><span className='gift-card'>We Say 'NO'</span><br /> To Gift Card Wastage!</h1>
                <img className='waste-underline' src={underline} alt="Cardonic" />                  
                <div className='waste-line'></div>
                {secthree.map((data)=>{
                    const {id, title, textOne, textTwo, textThree} = data
                    return(
                    <div key={id} className='texts'>
                        <p className='no-waste'>{textOne}</p>
                        <p className='no-waste'>{textTwo}</p>
                        <p className='no-waste'>{textThree}</p>
                    </div>
                    )
                })}
            </div>
        </div>
        <Slider />
    </div>
    </>
  )
}

export default Secthree
