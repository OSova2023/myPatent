import React from 'react'
import '../App.css'
import '../media.css'

import CustomCarousel from './slider/Slider'
import adw from '../images/feedback/adwokat.png'
import bank from '../images/feedback/bank.png'
import buro from '../images/feedback/buro.jpg'
import lewel from '../images/feedback/lewel.jpg'
import lexema from '../images/feedback/lexema.jpg'
import muzikl from '../images/feedback/muzikl.png'
import ortotis from '../images/feedback/ortotis.jpg'
import premium from '../images/feedback/premium.jpg'

const img1 = adw
const img2 = bank
const img3 = buro
const img4 = lewel
const img5 = lexema
const img6 = muzikl
const img7 = ortotis
const img8 = premium

export default function Feedback() {
  const partnersImgList = [img1,img2,img3,img4,img5,img6,img7,img8]
 
  return (
    <div className='container_body shrink-body'>
      <p className='title text-center mb-10 xs:mb-5'>Благодарности</p>
      <div className='mx-auto flex justify-center'>
        <CustomCarousel>
          {partnersImgList.map((image, index) => {
            return <img key={index} src={image} alt='feed' />;
          })}
        </CustomCarousel>
      </div>     
    </div>
  )
}
 