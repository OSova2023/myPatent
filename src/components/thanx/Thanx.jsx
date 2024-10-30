import React, { forwardRef, useState } from 'react'
import '../../media.css'
import "../../App.css"
import thanx_1 from '../../images/thanx/thanx_1.jpg'
import thanx_2 from '../../images/thanx/thanx_2.jpg'
import thanx_3 from '../../images/thanx/thanx_3.jpg'
import thanx_4 from '../../images/thanx/thanx_4.jpg'
import thanx_5 from '../../images/thanx/thanx_5.jpg'
import thanx_6 from '../../images/thanx/thanx_6.jpg'
import thanx_7 from '../../images/thanx/thanx_7.jpg'
import thanx_8 from '../../images/thanx/thanx_8.jpg'
import thanx_9 from '../../images/thanx/thanx_9.jpg'

function Thanx(props) {
    const img1 = thanx_1
    const img2 = thanx_2
    const img3 = thanx_3
    const img4 = thanx_4
    const img5 = thanx_5
    const img6 = thanx_6
    const img7 = thanx_7
    const img8 = thanx_8
    const img9 = thanx_9
    const thanxList = [img1,img2,img3,img4,img5,img6,img7,img8,img9]

    const [isShown, setIsShown] = useState(false)
    
  return (
    <div className='container_body'>
        <p className='title text-center mb-10 xs:mb-5'>Благодарности Пирогову К.В.</p>
        <div className={`${ isShown ? 'thanx_container' : 'thanx_container_hidden'} flex flex-wrap justify-between gap-1`}>
            {thanxList.map((item)=><div className="feedback_li" key={item.src}><img src={item} alt="thanx" /></div>)}
        </div>
        <button className='button__thx mt-8 mx-auto flex justify-center' 
          onClick={() =>{
            setIsShown(prev=>!prev)
            props.handleScrollTo(props.thanxRef)
          }}>{isShown ? "Скрыть" : 'Показать всё'}</button>
    </div>
  )
}

export default forwardRef(Thanx)