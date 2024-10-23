import React from 'react'
import '../../media.css'
import '../../App.css'
import './company_details.css'
import { Link } from 'react-router-dom'

export default function CompanyDetails() {
  return (
    <div className='container_body shrink-body'>
      <Link to='/' className='rounded bg-slate-300 text-slate-700 px-3 py-2'>Вернуть на главную</Link>
      <div className='company-details_ul__container'>
        <ul className='company-details_ul'>
          <p className='company-details_li'>Номер счёта: 40702810502580004650
          </p>
          <p className='company-details_li'>Валюта: RUR
          </p>
          <p className='company-details_li'>Название: ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ПИРОГОВ И КРИВЦОВ КОМПАНИ"
          </p>
          <p className='company-details_li'>ИНН: 0800020253
          </p>
          <p className='company-details_li'>КПП: 080001001
          </p>
          <p className='company-details_li'>Банк: АО "АЛЬФА-БАНК"
          </p>
          <p className='company-details_li'>БИК: 044525593
          </p>
          <p className='company-details_li'>Кор. счёт: 30101810200000000593
          </p>
          <p className='company-details_li'>Юридический адрес компании: улица МОНТАЖНАЯ, д. Д. 5А, кв./оф. ПОМЕЩ. 4, Республика Калмыкия, р-н ГОРОДОВИКОВСКИЙ, г. ГОРОДОВИКОВСК</p>

        </ul>
      </div>
    </div>
  )
}
