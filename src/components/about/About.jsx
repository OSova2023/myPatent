import React from 'react'
import ButtonConsult from '../ButtonConsult'
import '../about/about.css'
import '../../index.css'
import '../../media.css'
import krivmain from '../../images/about/krivzov_main.png'
import elena from '../../images/about/elena.png'
import kriv from '../../images/about/krivcov.png'
import pir from '../../images/about/pirogov1.jpg'
import chrom from '../../images/about/chromenkov.png'
import food from '../../images/clients/food.png'
import gazprom from '../../images/clients/gazprom.png'
import glawpul from '../../images/clients/glawpul.png'
import jet24 from '../../images/clients/jet24.png'
import mmt from '../../images/clients/mmt.png'
import mosgor from '../../images/clients/mosgor.jpg'
import navka from '../../images/clients/navka.png'
import pullman from '../../images/clients/pullman.png'
import resurs from '../../images/clients/resurs.png'
import ros from '../../images/clients/ros.png'
import slawnwft from '../../images/clients/slawnwft.png'
import stomor from '../../images/clients/stomor.png'
import tat from '../../images/clients/tat.png'
import ugoria from '../../images/clients/ugoria.png'

export default function About() {

  const partners = [food, gazprom, glawpul, jet24, mmt, mosgor, navka, pullman, resurs, ros, slawnwft, stomor, tat, ugoria]

  
  return (
    <div className='About container_body flex flex-col gap-10'>
      <div className='bg_blue p-20 xl:p-12 900px:p-10 md:p-6 sm:p-4 '>
        <div className=''>
          <p className='title font-bold mb-6'>Патентное бюро
          "Мой Патент"</p>
          <ul className='flex flex-col gap-3 mb-6'>
            <li>Регистрация товарного знака</li>
            <li>Патентование</li>
            <li>Защита интеллектуальной собственности</li>
          </ul>
          <ButtonConsult />
        </div>
      </div>
      <div className='flex flex-wrap justify-around my-10 xs:my-5 font-roboto gap-5'>
        <div className='text-center'>
          <div className='about_stat_title gold text-4xl mb-5 xl:mb-3 font-bold'><p>12</p></div>
          <div className='about_stat_text grey text-center text-xl leading-6'>лет успешной практики</div>
        </div>
        <div className='text-center'>
          <div className='about_stat_title gold text-4xl mb-5 xl:mb-3 font-bold'>1350</div>
          <div className='about_stat_text grey text-xl leading-6'>довольных клиентов</div>
        </div>
        <div className='text-center'>
          <div className='about_stat_title gold text-4xl mb-5 xl:mb-3 font-bold'>2000+</div>
          <div className='about_stat_text grey text-xl 900px:text-md leading-6'>успешных регистраций</div>
        </div>
      </div>
      <div className="strip">&nbsp;</div>
      <div className='buro_krivtcov__container grid grid-cols-2 gap-10 vertical-align md:block'>
        <div className='rounded'><img src={krivmain} alt='krivtcov_main'/></div>
        <div className='flex flex-col gap-5 xl:gap-2 md:pt-10 xs:pt-5'>
          <div><p className='about_text-title text-2xl xl:text-xl font-bold'>Бюро «myPatent » – патентные поверенные, адвокаты и юристы</p></div>
          <div><p className='about_text text-lg '>С 2009 года мы помогаем представителям бизнеса и обычным клиентам зарегистрировать и защитить интеллектуальную собственность, извлечь прибыль из собственных разработок, бороться с незаконным использованием инноваций.</p> </div>
          <div><p className='about_text text-lg '>Мы работаем с физическими лицами, малыми и крупными компаниями по всей России. Предлагаем юридическую помощь в области патентования, корпоративного и авторского права. Готовы проконсультировать клиентов по телефону – ответить на вопросы и закрепить подходящего специалиста.</p></div>
        </div>
      </div>     
      <div className='about_team__container'>
        <p className='title my-20 font-bold text-center md:my-10 sm:my-8 xs:my-4'>Наша команда</p>
        <div className='about_team-ul mb-20 grid grid-cols-4 gap-20 xl:gap-2 md:gap-4 sm:gap-3 text-center md:grid-cols-2 xs:block'>
          <li className='px-8 xl:px-3 xs:my-8'><img src={kriv} className='rounded-full w-2/3 xs:w-3/5 lg:w-full md:p-12 sm:p-8 xs:p-2 mx-auto' alt='kriv'/><p className='comp_title'>Владимир Кривцов</p><p className='comp_title_child'>Управляющий партнер</p></li>
          <li className='px-8 xl:px-3 xs:my-8'><img src={pir} className='rounded-full w-2/3 xs:w-3/5 lg:w-full md:p-12 sm:p-8 xs:p-2 mx-auto ' alt='pirogov'/><p className='comp_title'>Кирилл Пирогов</p><p className='comp_title_child'>Патентный поверенный</p></li>
          <li className='px-8 xl:px-3 xs:my-8'><img src={elena} className='rounded-full w-2/3 xs:w-3/5 lg:w-full md:p-12 sm:p-8 xs:p-2 mx-auto' alt='elena'/><p className='comp_title'>Елена Коломыцева</p><p className='comp_title_child'>Помощник патентного поверенного</p></li>
          <li className='px-8 xl:px-3 xs:my-8'><img src={chrom} className='rounded-full w-2/3 xs:w-3/5 lg:w-full md:p-12 sm:p-8 xs:p-2 mx-auto' alt='chrom'/><p className='comp_title'>Сергей Хроменков</p><p className='comp_title_child'>Юрист</p></li>
        </div>
        <div className="strip">&nbsp;</div>
        <div className='about_team-kriv_ul__container font-roboto rounded mt-20 bg_blue p-20 xl:p-12 900px:p-10 md:p-3'>
          <div className='about_team-kriv__krivtsov-title'>
            <div className='my-auto'>
            <img src={kriv} className='rounded-full w-24' alt='kriv'/>
            </div>
            <p className='font-poppins font-bold text-center my-10 xs:my-1'><span className='about_team-kriv_span'>КРИВЦОВ</span> Владимир Игоревич</p>
          </div>
          <ul className='about_team-kriv_ul flex flex-col'>
            <li className="about_team-li"><span className='text-center mr-2'>&#10003;</span>окончил одну из лучших юридических академий СССР - Национальный юридически университет имени Ярослава Мудрого в г. Харьков</li>
            <li className="about_team-li"><span className='text-center mr-2'>&#10003;</span>в бизнесе с 2012 г.</li>
            <li className="about_team-li"><span className='text-center mr-2'>&#10003;</span>в 3х странах мира основал различные юридические компании</li>
            <li className="about_team-li"><span className='text-center mr-2'>&#10003;</span>был членом правления Международной продовольственной биржи</li>
            <li className="about_team-li"><span className='text-center mr-2'>&#10003;</span>запуск ГЧП совместно с Союзом Федерации</li>
            <li className="about_team-li"><span className='text-center mr-2'>&#10003;</span>амбассадор бизнес-клуба Капитал для инвесторов</li>
            <li className="about_team-li"><span className='text-center mr-2'>&#10003;</span>основатель бизнес общества Эквиум Беларусь</li>
            <li className="about_team-li"><span className='text-center mr-2'>&#10003;</span>основатель бренда MyPatent</li>
            <li className="about_team-li"><span className='text-center mr-2'>&#10003;</span>богослов, меценат и философ</li>
            <li className="about_team-li"><span className='text-center mr-2'>&#10003;</span>профессор бизнес-кафедры "Х10"</li>
          </ul>
        </div>
      </div>
      <div className='about_clients__container'>
        <p className='title my-20 md:my-10 sm:my-8 xs:my-4 font-bold text-center'>Наши клиенты</p>
        <div className='about_clients-ul flex flex-wrap justify-between gap-20 xl:gap-16 lg:gap-12 md:gap-10 sm:gap-6 xs:justify-center text-center'>
          {partners.map((partner,i)=> <li className='w-24 xl:w-20 md:w-16' key={i}><img src={partner} className='rounded-full mx-auto' alt='food'/></li>)}
        </div>
      </div>
      <div className=''></div>
      <div className=''></div>
      <div className=''></div>
    </div>
  )
}