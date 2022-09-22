import React from 'react'
import { secone } from '../data'
import home from './Cardonic-images/home.svg'
import underline from './Cardonic-images/underline.svg'


const Secone = () => {
  return (
    <>
      <div>
        {secone.map((data)=>{
            const {id, googleplay, appstore, text} = data
            return (
                <div key={id} className='secone'>
                    <div className='secone-right'>
                        <h1 className='header'>Sell <span className='gift-card'>Gift Cards</span> & Earn Rewards 💰</h1>
                        <img className='underline' src={underline} alt="Cardonic" />
                        <p className='text'>{text}</p>
                        <div className='download'>
                            <img className='google-play' src={googleplay} alt="Play store" />
                            <img className='google-play' src={appstore} alt="Apple store" />
                        </div>
                    </div>
                    <div className='secone-left'>
                        <img className='sell-img' src={home} alt="Sell gift card" />
                    </div>
                </div>
            )
  
        })}
      </div>
    </>
  )
}

export default Secone
