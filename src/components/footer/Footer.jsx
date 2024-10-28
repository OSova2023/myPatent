import React from 'react'
import './footer.css'
import '../../media.css'
import logo from '../../images/logo_itog.png'
import tel from '../../images/phone2.png'
import loc from '../../images/location3.png'
import env from '../../images/email.png'
import clock from '../../images/clock1.png'
import { Link } from 'react-router-dom'
import { forwardRef } from 'react'


function Footer(props) {
  return (
    <div className='footer'>      
      <div className='footer__container container_body font-robotoslab'>
        <div className='footer_columns'>
          <div className='header__logo-img footer_column'>
              <img src={logo} alt="logo" />
          </div>      
          <div className='footer_column flex flex-col gap-4'>
            <li className='mb-2 footer_list-title'>Контакты</li>
            <li className='contacts_block flex gap-4'><img src={tel} className='w-6 icons' alt='tel' /><a href="tel:+78005507583">8 (800) 550-75-83</a></li>
            <li className='contacts_block flex gap-4'><img src={loc} className='w-6 h-6' alt='loc' /><p>Центральный офис: Москва, Дербеневская набережная, д.11, к.А, оф. 311</p></li>
            <li className='contacts_block flex gap-4'><img src={env} className='w-6 h-6' alt='tel' /><a href="mailto:sales@mypatent.pro">sales@mypatent.pro</a></li>
            <li className='contacts_block flex gap-4'><img src={clock} className='w-6 h-6' alt='tel' /><p>Время работы: 9-20</p></li>
          </div>          
          <div className='footer_column flex flex-col gap-2'>
            <li className='footer_list-title mb-2'>Услуги</li>
            <li className='contacts_block flex gap-4 color61'>Регистрация товарного знака</li>
            <li className='flex gap-4 color61'>Патентование</li>
            <li className='flex gap-4 color61'>Договоры</li>
            <li className='flex gap-4 color61'>Суды и споры</li>
            <li className='flex gap-4 color61'>Авторское право</li>
            <li className='flex gap-4 color61'>Программы для ЭВМ</li>
          </div>
          <div className='footer_column flex flex-col gap-2'>
            <li className='footer_list-title mb-2'>Компания</li>
            <li className='contacts_block flex color61'><Link to='/itservices' className='contacts_block'>IT Услуги</Link></li>
            <li className='contacts_block flex color61'><Link to='/contacts'>Контакты</Link></li>
            <li className='contacts_block gold'><Link to='/companydetails' onClick={()=>props.handleScrollTo(props.detailsRef)}>Реквизиты</Link></li>
          </div>          
        </div>
        <div>
        </div>
      </div>
      <div className='footer_years container_body'>
        <p className='pt-10 md:pt-5'>© 2009-2025. &nbsp;
          {/* <Link to='/agreements' className='gold'>Политика</Link> */}
          </p>
      </div>      
    </div>
  )
}

export default forwardRef(Footer)