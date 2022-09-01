import React from 'react'
import google from './Cardonic-images/google-play.svg'
import apple from './Cardonic-images/app-store.svg'
// import web from './Cardonic-images/web.svg'


const Secseven = () => {
  return (
    <div>
        <section className='section-seven'>
            <div className='sec-seven'>
                <h1 className='secseven-title'>Get Started Now</h1>
                <p className='secseven-text'>Download the Cardtonic App or register on web and start selling gift cards like bosses do.</p>
                <div className='sec-seven-img'>
                    <img className='web' src={google} alt="Google-play" />
                    <img className='web' src={apple} alt="Apple-store" />
                    <img className='web' src={google} alt="Google-play" />

                </div>
            </div>
        </section>
    </div>
  )
}

export default Secseven