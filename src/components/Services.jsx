import React from 'react'
import '../App.css'
import '../media.css'

export default function Services() {
  return (
    <div className='container_body shrink-body'>
      <p className='title my-5 font-bold text-center xl:my-2'>Наши компетенции</p>
        <div className='grid grid-cols-3 gap-20 my-20 xl:my-14 lg:my-10 md:my-6 xs:my-3 xl:gap-14 lg:gap-10 md:gap-4 sm:gap-3 xs:gap-2 md:grid-cols-2 sm:flex sm:flex-wrap'>
            <li className=''><p className='comp_title'>Регистрация товарного знака</p><p>Помощь с подачей заявки в Роспатент. Получение решения о регистрации товарного знака в обычном и ускоренном режиме.</p></li>
            <li className=''><p className='comp_title'>Патентование</p><p>Проверка и подача документов в ФИПС. Оформление патентов на изобретения, промышленные образцы и полезные модели.</p></li>
            <li className=''><p className='comp_title'>Суды и споры</p><p>Урегулирование сложных конфликтных ситуаций. Решение споров об авторстве инновации, установление патентообладателя.</p></li>
            <li className=''><p className='comp_title'>Договоры</p><p>Составление договоров для передачи прав и предоставления франшизы. Юридические консультации патентных проверенных.</p></li>
            <li className=''><p className='comp_title'>Авторское право</p><p>Регистрация, признание, защита в суде и официальное закрепление авторских прав. Взыскание ответственности с нарушителей.</p></li>
            <li className=''><p className='comp_title'>Регистрация программ для ЭВМ</p><p>Комплексная работа с компьютерными программами, мобильными приложениями, доменными именами и IT-решениями.</p></li>
        </div>
    </div>
  )
}
