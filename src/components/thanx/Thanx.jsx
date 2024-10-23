import React from 'react'
import '../../media.css'
import { Link } from 'react-router-dom'
import thanx_1 from '../../images/thanx/thanx_1.jpg'
import thanx_2 from '../../images/thanx/thanx_2.jpg'
import thanx_3 from '../../images/thanx/thanx_3.jpg'
import thanx_4 from '../../images/thanx/thanx_4.jpg'
import thanx_5 from '../../images/thanx/thanx_5.jpg'
import thanx_6 from '../../images/thanx/thanx_6.jpg'
import thanx_7 from '../../images/thanx/thanx_7.jpg'
import thanx_8 from '../../images/thanx/thanx_8.jpg'
import thanx_9 from '../../images/thanx/thanx_9.jpg'

export default function Thanx() {
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
  return (
    <div className='container_body'>
        <div className='text-center'><Link to='/' className='rounded bg-slate-300 text-slate-700 px-3 py-2'>Назад</Link></div>
        <div className='grid grid-cols-2 gap-5 xs:flex xs:flex-wrap my-4'>
            {thanxList.map((item)=><div className="p-5 feedback_li"><img src={item}  alt="thanx" /></div>)}
        </div>
    </div>
  )
}
