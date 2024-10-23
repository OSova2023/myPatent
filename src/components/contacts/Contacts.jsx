import React from 'react'
import tel from '../../images/phone2.png'
import loc from '../../images/location3.png'
import env from '../../images/email.png'
import clock from '../../images/clock1.png'
import telegram from '../../images/telegram-black.png'
import MyMap from '../Map'
import './contacts.css'
import '../.././media.css'
import '../.././App.css'


export default function Contacts() {
  return (
    <div className='container_body'>
      <div className='flex flex-col gap-4 sm:gap-2 mb-10 text-xl bg_blue p-16 lg:p-12 md:p-10 xs:p-8 rounded'>
        <p className='title mb-8'>Работаем по всей России. По вопросам сотрудничества позвоните нам или отправьте сообщение в Telegram</p>
        <div className='contacts_data_container flex gap-4'>
            <img src={tel} className='contact_icons' alt='tel' /><a href="tel:+78005507583" className='contacts_data-text'>8 (800) 550-75-83</a>
        </div>
        <div className='flex gap-4'>
            <img src={loc} className='contact_icons' alt='loc' /><p className='contacts_data-text'>Центральный офис: Москва, Дербеневская набережная, д.11, к.А, оф. 311</p>
        </div>
        <div className='flex gap-4'>
            <img src={env} className='contact_icons' alt='tel' /><a href="mailto:sales@mypatent.pro" className='contacts_data-text'>sales@mypatent.pro</a>
        </div>
        <div className='flex gap-4'>
            <img src={telegram} className='contact_icons ' alt='telegram' /><a href="https://t.me/MyPatent8" className='contacts_data-text'>Telegram</a>
        </div>
        <div className='flex gap-4'>
            <img src={clock} className='contact_icons' alt='tel' /><p className='contacts_data-text'>Время работы: 9-20</p>
        </div>
      </div>
      <MyMap />
    </div>
        
  )
}
