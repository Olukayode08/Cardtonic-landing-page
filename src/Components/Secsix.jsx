import React from 'react'
import {secsix} from '../data'
import underline from './Cardonic-images/underMark.svg'


const Secsix = () => {
  return (
    <>
      <section className='section-six'>
        <section className='sec-six'>
            {secsix.map((data)=>{
                const {id, title, text, vanguard, azcentral, techpoint, market, punch, digital} = data
                return(
                    <div className='secsix' key={id}>
                        <div className='cardonic-global'>
                            <p className='secsix-text'>{text}</p>
                            <img className='underline-news' src={underline} alt="Cardonic" />
                            <div className='secsix-line'></div>
                            <h3 className='secsix-title'>{title}</h3>
                        </div>
                        <div className='cardonic-news'>
                            <img className='news' src={vanguard} alt="vanguard" />
                            <img className='news' src={azcentral} alt="azcentral" />
                            <img className='news' src={punch} alt="Punch" />
                            <img className='news' src={market} alt="Market" />
                            <img className='news' src={digital} alt="Digital" />
                            <img className='news' src={techpoint} alt="Techpoint" />
                        </div>
                        <p className='follow'>Follow our ongoing Upskill #CardtonicMacbookGiveaway program</p>
                    </div>
                )
            })}
        </section>
      </section>
    </>
  )
}

export default Secsix
