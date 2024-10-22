import React from 'react'
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

// const partner1 = <div className="p-5 feedback_li"><img src={bank}  alt="feedback" onClick={(e)=>console.log(e)}/><p>Банк Зенит</p></div>
// const partner2 =  <div className="p-5 feedback_li"><img src={buro} alt="feedback"/><p>ООО "Бюро Групп"</p></div>
// const partner3 =  <div className="p-5 feedback_li"><img src={lewel} alt="feedback"/><p>ООО "Левел 99"</p></div>
// const partner4 =  <div className="p-5 feedback_li"><img src={lexema} alt="feedback"/><p>ООО "Лексема"</p></div>
// const partner5 =  <div className="p-5 feedback_li"><img src={muzikl} alt="feedback"/><p>ООО "Ивентика"</p></div>
// const partner6 =  <div className="p-5 feedback_li"><img src={ortotis} alt="feedback"/><p>ООО "ИПР "ОРТОТИС"</p></div>
// const partner7 =  <div className="p-5 feedback_li"><img src={adw} alt="feedback"/><p>"АдвокатЪ"</p></div>
// const partner8 =  <div className="p-5 feedback_li"><img src={premium} alt="feedback"/><p>ООО "Премиум сидс"</p></div>

export default function Feedback() {
  // const partnersList = [partner1,partner2,partner3,partner4,partner5,partner6,partner7,partner8]
  const partnersImgList = [img1,img2,img3,img4,img5,img6,img7,img8]

  // const [zoom, setZoom] = useState(false)
  
  // function zoomImage(div) {
  //   console.log(div)
  //   return div
  // }
  // function zoomy(div) {
  //   setZoom(true)
  //   return zoomImage(div)
  // }
 
  return (
    <div className='flex container_body'>
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
 