import React, {useState, useEffect} from 'react'
import {slider} from '../data'
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'

const Slider = () => {
    const [icons, setIcons] = useState(0)
    const {id, sliderTitle, sliderText, sliderIcon} = slider[icons]

    const checkIcon = (icon)=>{
      if (icon > slider.length - 1) {
          return 0
      }else if (icon < 0) {
        return slider.length-1
      }else{
        return icon
      }
    }

    const nextSlide= ()=>{
      setIcons((icons)=>{
        let newIcon = icons + 1
        return checkIcon(newIcon)
      })
    }

     const prevSlide= ()=>{
      setIcons((icons)=>{
        let newIcon = icons - 1
        return checkIcon(newIcon)
      })
    }
    const moveDots = id =>{
      setIcons(id)
    }


  return (
    <>
        <div className='slider-container'>
            <article className='slider'>
              <h3 className="icon-heading">{sliderTitle}</h3>
              <p className='icon-text'>{sliderText}</p>
              <img className='icon-img' src={sliderIcon} alt="Cardonic" />             
              <div className='dots'>
                {slider.map(({slide, id})=>{
                  return(
                    <button className='slider-dots' onClick={()=>moveDots(id - 1)} key={id}>.</button>
                  )

                })}
            </div>
            </article>
            <div className="btn-container">
              <button className='prev-btn' onClick={prevSlide}> <AiOutlineArrowLeft /></button>
              <button className='next-btn' onClick={nextSlide}><AiOutlineArrowRight /></button>            
            </div> 
        </div>

    </>
  )
}

export default Slider
