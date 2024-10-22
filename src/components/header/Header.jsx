import React from 'react'
import logo from '../../images/logo_itog.png'
import tel from '../../images/phone.png'
import teleg from '../../images/telegram.png'
import {Link } from 'react-router-dom'
import { useState } from 'react'
import burger from '../../images/burger2.png'
import cross from '../../images/close_cross.png'
import './burgerstyle.css'
import '../../media.css'

export default function Header() {
  const [isClickedBurger, setIsClickedBurger] = useState(false)

  return (
    <div className='header'>

    {/* Burger desktop */}
    <div className='header__container_desktop font-roboto'>
        <div className='header__logo-img z-10'>
          <img src={logo} alt="logo" />
        </div>
        <div className='burger_menu'> 
          <div className=''>
            <ul className='header_ul gap-8 text-xl 2xl:text-xl xl:text-lg lg:text-lg md:text-base sm:text-sm 2xl:gap-2 xl:gap-1'>
              <li><Link to='/' className='link'>О нас</Link></li>
              <li><Link to='/services' className='link'>Услуги</Link></li>
              <li><Link to='/itservices' className='link'>IT Услуги</Link></li>
              <li><Link to='/feedback' className='link'>Отзывы</Link></li>
              <li><Link to='/contacts'className='link'>Контакты</Link></li>
            </ul>
          </div>          
        </div>
        <div className='header_text-right'>
          <div className='flex gap-2'><img src={tel} className='w-6' alt='tel'/><a href="tel:+78005507583">8 (800) 550-75-83</a></div>          
          <div className='flex gap-2'><img src={teleg} className='w-6' alt='teleg'/><a href="https://t.me/MyPatent9Bot" className='font-robotolab mx-0 text-center'>Telegram</a></div>
        </div>
    </div>

  {/* Burger mobile */}
    <div className='header__container_mobile font-roboto'>
      <div className='header__logo-img z-10 flex justify-between gap-10'>
        <div><img src={logo} alt="logo" /></div>
        <div className='burger_icon w-7 h-7'><img src={isClickedBurger ? cross : burger} className='burger_icon w-full' onClick={()=>setIsClickedBurger((prev)=> !prev)} alt='burger'/></div>
      </div>
      <div className='burger_menu-mobile'>
        <div className={`${isClickedBurger ? 'header_ul__container_active' : 'header_ul__container'}`}>
            <ul className='header_ul grey block gap-8 text-xl 2xl:text-xl xl:text-lg lg:text-lg md:text-md sm:text-sm 2xl:gap-2 xl:gap-1'>
              <li><Link to='/' className='link'>О нас</Link></li>
              <li><Link to='/services' className='link'>Услуги</Link></li>
              <li><Link to='/itservices' className='link'>IT Услуги</Link></li>
              <li><Link to='/feedback' className='link'>Отзывы</Link></li>
              <li><Link to='/contacts'className='link'>Контакты</Link></li>
              <li><div className='header-mobile_contacts mx-auto flex justify-center gap-2 font-bold text-xl 2xl:text-xl xl:text-lg lg:text-lg md:text-md sm:text-sm xs:text-sm mt-20'><img src={tel} className='w-5 ' alt='tel'/><a href="tel:+78005507583" className='font-robotolab mx-0 text-center'>8 (800) 550-75-83</a></div></li>      
              <li><div className='flex justify-center gap-2 font-bold text-xl 2xl:text-xl xl:text-lg lg:text-lg md:text-md sm:text-sm xs:text-sm mt-5'><img src={teleg} className='w-6' alt='teleg'/><a href="https://t.me/MyPatent9Bot" className='font-robotolab mx-0 text-center'>Telegram</a></div>    
              </li>
            </ul>
        </div>        
      </div>
    </div>
  </div>  
  )
}