import React from 'react'
import ButtonConsult from '../ButtonConsult'
import { forwardRef } from 'react'
import '../about/about.css'
import '../../index.css'
import '../../media.css'
import '../../App.css'
import krivmain from '../../images/about/krivzov_main.png'
import elena from '../../images/about/kulakova.png'
import kriv from '../../images/about/krivcov.png'
import pir from '../../images/about/pirogov2_sm.png'
import chrom from '../../images/about/chromenkov.png'
import prib from '../../images/about/pribylski.png'
import pirogov from '../../images/about/pirogov_portrait_small.jpg'
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

function About(props) {

  const partners = [food, gazprom, glawpul, jet24, mmt, mosgor, navka, pullman, resurs, ros, slawnwft, stomor, tat, ugoria]
  const team = [
    {
    name: 'Владимир Кривцов',
    title: 'Управляющий партнер',
    src: kriv
  },
    {
    name: 'Кирилл Пирогов',
    title: 'Генеральный директор',
    src: pir
  },
    {
    name: 'Елена Кулакова',
    title: 'Юрист',
    src: elena
  },
    {
    name: 'Андрей Прибыльский',
    title: 'Юрист',
    src: prib
  },
]

  const autobio_1 = 'окончил одну из лучших юридических академий СССР - Национальный юридически университет имени Ярослава Мудрого в г. Харьков'
  const autobio_2 = 'в бизнесе с 2012 г.'
  const autobio_3 = 'в 3х странах мира основал различные юридические компании'
  const autobio_4 = 'был членом правления Международной продовольственной биржи'
  const autobio_5 = 'запуск ГЧП совместно с Союзом Федерации'
  const autobio_6 = 'амбассадор бизнес-клуба Капитал для инвесторов'
  const autobio_7 = 'основатель бизнес общества Эквиум Беларусь'
  const autobio_8 = 'основатель бренда MyPatent'
  const autobio_9 = 'богослов, меценат и философ'
  const autobio_10 = 'профессор бизнес-кафедры "Х10"'
  const autoBioArray = [autobio_1,autobio_2,autobio_3,autobio_4,autobio_5,autobio_6,autobio_7,autobio_8,autobio_9,autobio_10]
 
  const autobio_p1 = 'Генеральный директор юридической компании ООО "ПИРОГОВ И КОМПАНИЯ"'
  const autobio_p2 = 'Член Московского областного отделения "ОПОРА РОССИИ"'
  const autobio_p3 = 'Член Федерального комитета "ОПОРА РОССИИ" по развитию предпринимательства на цифровых платформах'
  const autobio_p4 = 'Председатель комитета по развитию предпринимательства на цифровых платформах общероссийской общественной организации малого и среднего предпринимательства Московского обласного отделения "ОПОРА РОССИИ"'
  const autobio_p5 = 'Член комитета по франчайзингу и интелектуальной собственности Московского обласного отделения "ОПОРА РОССИИ"'
  const autobio_p6 = 'Член регионального совета Московского обласного отделения "ОПОРА РОССИИ"'
  const autobio_p7 = 'Куратор ЦФО совместного федерального проекта "ОПОРА-СТАРТ" и "WILDBERRIES" ОБУЧАЮЩЕГО КУРСА "БИЗНЕС-КОНСУЛЬТАНТ" на платформе "WILDBERRIES"'
  const autobio_p8 = 'Действующий селлер цифровой платформы DIGITAL WILDBERRIES'
  const autoBioPirArray = [autobio_p1,autobio_p2,autobio_p3,autobio_p4,autobio_p5,autobio_p6,autobio_p7,autobio_p8]

 
  return (
    <div className='About container_body shrink-body flex flex-col gap-10'>
      <div className='bg_blue p-20 xl:p-12 900px:p-10 md:p-6 sm:p-4 '>
        <div className=''>
          <p className='title font-bold mb-6'>Патентное бюро
          "Мой Патент"</p>
          <ul className='flex flex-col gap-3 mb-6'>
            <li>Регистрация товарного знака</li>
            <li>Патентование</li>
            <li>Защита интеллектуальной собственности</li>
          </ul>
          <div onClick={()=>props.handleScrollTo(props.contactRef)}>
            <ButtonConsult />
          </div>
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
        <div className='rounded'><img src={krivmain} alt='krivtcov_main' className='mx-auto'/></div>
        <div className='flex flex-col gap-5 xl:gap-2 md:pt-10 xs:pt-5'>
          <div><p className='about_text-title text-2xl xl:text-xl font-bold'>Бюро «myPatent » – патентные поверенные, адвокаты и юристы</p></div>
          <div><p className='about_text text-lg '>С 2009 года мы помогаем представителям бизнеса и обычным клиентам зарегистрировать и защитить интеллектуальную собственность, извлечь прибыль из собственных разработок, бороться с незаконным использованием инноваций.</p> </div>
          <div><p className='about_text text-lg '>Мы работаем с физическими лицами, малыми и крупными компаниями по всей России. Предлагаем юридическую помощь в области патентования, корпоративного и авторского права. Готовы проконсультировать клиентов по телефону – ответить на вопросы и закрепить подходящего специалиста.</p></div>
        </div>
      </div>     
      <div className='about_team__container'>
        <p className='title my-20 font-bold text-center md:my-10 sm:my-8 xs:my-4'>Наша команда</p>
        <div className='about_team-ul mb-20 grid grid-cols-4 gap-20 xl:gap-2 900px:gap-y-8 sm:gap-3 text-center 900px:grid-cols-2 xs:block'>
          
          {team.map(person=>
          <li className='px-8 xl:px-3 xs:my-8'><img src={person.src} className='rounded-full w-full xl:w-2/3 md:w-full md:p-8 sm:p-6 xs:p-2 mx-auto' alt='kriv'/><p className='comp_title'>{person.name}</p><p className='comp_title_child'>{person.title}</p></li>
          )}
      
        </div>
        <div className="strip">&nbsp;</div>

        <div>
          {/* Прирогов */}
          <div className='about_team-kriv_ul__container font-roboto rounded mt-20 bg_blue p-20 xl:p-12 900px:p-10 md:p-3'>       
            <div className='about_team-kriv__krivtsov-title'>
              <div className='my-auto'>
              <img src={pirogov} className='rounded-full w-24' alt='pirogov'/>
              </div>
              <p className='font-poppins font-bold text-center my-10 xs:my-1'><span className='about_team-kriv_span'>ПИРОГОВ</span> Кирилл Витальевич</p>
            </div>
            <div className='about_team-kriv_text-button'>
              <div>
                <ul className='about_team-kriv_ul flex flex-col'>
                  {autoBioPirArray.map((item)=> <li className="about_team-li text-justify"><span className='text-center mr-2'>&#10003;</span>{item}</li> )}
                </ul>
              </div>
              <div className='my-auto button__thanx' onClick={()=>props.handleScrollTo(props.thanxRef)}>Благодарственные письма</div>                    
            </div>
          </div>
          {/* Кривцов */}
          <div className='about_team-kriv_ul__container font-roboto rounded mt-20 bg_blue p-20 xl:p-12 900px:p-10 md:p-3'>       
            <div className='about_team-kriv__krivtsov-title'>
              <div className='my-auto'>
              <img src={kriv} className='rounded-full w-24' alt='kriv'/>
              </div>
              <p className='font-poppins font-bold text-center my-10 xs:my-1'><span className='about_team-kriv_span'>КРИВЦОВ</span> Владимир Игоревич</p>
            </div>
            <div className='about_team-kriv_text-button'>
              <div>
                <ul className='about_team-kriv_ul flex flex-col'>
                  {autoBioArray.map((item)=> <li className="about_team-li text-justify"><span className='text-center mr-2'>&#10003;</span>{item}</li> )}
                </ul>
              </div>
              <div className='my-auto button__thanx' onClick={()=>props.handleScrollTo(props.feedbackRef)}>Благодарственные письма</div> 
            </div>
          </div>
        </div>

        
      </div>
      <div className='about_clients__container'>
        <p className='title my-20 md:my-10 sm:my-8 xs:my-4 font-bold text-center'>Наши клиенты</p>
        <div className='about_clients-ul flex flex-wrap justify-between gap-20 xl:gap-16 lg:gap-12 md:gap-10 sm:gap-6 xs:justify-center text-center'>
          {partners.map((partner,i)=> <li className='w-24 xl:w-20 md:w-16' key={i}><img src={partner} className='rounded-full mx-auto' alt='food'/></li>)}
        </div>
      </div>
    </div>
  )
}

export default forwardRef(About)