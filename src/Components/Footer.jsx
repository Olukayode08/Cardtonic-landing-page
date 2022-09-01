import React from 'react'
import logo from './Cardonic-images/logo-white.svg'
import google from './Cardonic-images/google-play.svg'
import apple from './Cardonic-images/app-store.svg'


const Footer = () => {
  return (
    <>
    <footer>
        <section className='footer-section'>
        <div className="contact">
            <img src={logo} alt="cardonic" />
            <p className='gap'>Bridging the gap between individuals who need liquid cash and businesses who need discounted gift cards as a payment alternative. Cardtonic is available for Web, iPhone, and Android users.</p>
            <div className='wrapper'>
            <div>
                <p className='phone'>+234(0)13430626</p>
                <p className='phone'>+234(0)7060502770</p>
                <p className='support'>support@cardtonic.com</p>
                <p className='social-media'>IG | FB | TW</p>
            </div>
            <div className='footer-two'>
                <img src={google} alt="Google" />
                <img src={apple} alt="Apple" />
            </div>
            </div>

        </div>
        <div className='waste-line'></div>
        <div className='contact-business'>
        <div className='customer'>
            <p className='reward'>For The Customer</p>
            <p className='reward'>Download On Andriod</p>
            <p className='reward'>Download On iPhone</p>
            <p className='reward'>Get Reward Points</p>
            <p className='reward'>Taste The Tonic</p>
            <p className='reward'>Check Our Rates</p>
            <p className='reward'>Talk To Us</p>
            <p className='reward'>Visit Help Center</p>
        </div>
        <div className='business'>
            <p className='reward'>For The Business</p>
            <p className='reward'>Up Your Skill</p>
            <p className='reward'>Become A Partner</p>
            <p className='reward'>#CTGivesBack</p>
            <p className='reward'>Work With Us</p>
            <p className='reward'>Read Tthe Blog</p>
            <p className='reward'>Read Our Terms</p>
            <p className='reward'>Our Privacy Policy</p>
        </div>
        </div>
        </section>
        <p className='copy-right'>©2022 Cardtonic. All Rights Reserved.</p>
    </footer>
    </>
  )
}

export default Footer