import React, { useState } from 'react'
import '../App.css'
import './itservices.css'
import '../media.css'

export default function ItServices({itRef}) {
  
  const check_mark = <span className='text-center mr-2'>&#10003;</span>
  const block1 = <div className='flex flex-col gap-5 p-5'>
    <p>Мы помогаем компаниям <span className='font-bold'>автоматизировать бизнес-процессы и повышать эффективность</span> с помощью технологий ИИ.</p>
    <p>Наш подход объединяет передовые технологии машинного обучения и нейронных сетей для решения конкретных задач вашего предприятия:</p>
    <ul>
      <li>{check_mark}Автоматизация рутинных операций</li>
      <li>{check_mark}Прогнозирование спроса</li>
      <li>{check_mark}Выявление брака по видео</li>
      <li>{check_mark}Автоматическая обработка документов</li>
      <li>{check_mark}Персонализация предложений</li>
      <li>{check_mark}Распознование голоса и др.</li>
    </ul>
    </div>
  const block2 = <div className='flex flex-col gap-5 p-5 xs:p-1'>
    <p>В рамках ИИ консалтинга, команда Insight AI проводит <span className='font-bold'>тщательный анализ бизнес-процессов</span> вашей компании, выявляя оптимальные точки для внедрения ИИ:</p>
    <ul>
      <li>{check_mark}Строим BPMN и IDEF модели</li>
      <li>{check_mark}Визуализируем все бизнес-процессы</li>
      <li>{check_mark}Определяем, где и как искусственный интеллект может быть внедрен для достижения максимального эффекта</li>
      <li>{check_mark}Предоставляем конкретные рекомендации по применению ИИ технологий</li>
    </ul>
    <p>Наш подход позволяет не только выявить потенциал искусственного интеллекта для вашей компании, но и реализовать его с максимальной пользой</p>
    </div>
  const block3 = <div className='flex flex-col gap-5 p-5'>
    <p>Мы предлагаем комплексный подход к оптимизации и автоматизации процессов разработки, тестирования и развертывания ПО, а также его интеграции в облачную инфраструктуру</p>
    <p>Разрабатываем индивидуальные стратегии и обеспечиваем плавный переход от традиционных инфраструктур к облачным решениям, с поддержкой на каждом этапе — от планирования до выполнения и мониторинга.</p>
    <p>DevOps и передовые облачные платформы это:</p>
    <ul>
      <li>{check_mark}значительное ускорение времени выхода продукта на рынок</li>
      <li>{check_mark}высокая доступность и масштабируемость</li>
      <li>{check_mark}повышенная безопасность</li>
      <li>{check_mark}оптимизация затрат</li>
    </ul>
  </div>
  const block4 = <div className='flex flex-col gap-5 p-5'>
    <p>Преобразуем ваши данные в ценные бизнес-инсайты, способствующие принятию обоснованных решений и ускорению роста.</p>
    <p>Наши услуги охватывают весь спектр работы с данными — от сбора и обработки до анализа и визуализации.</p>
    <p><span className='font-bold'>Data-driven подход</span> позволяет не только реагировать на текущие тенденции и изменения в бизнес-среде, но и прогнозировать будущие события, оптимизируя процессы и повышая эффективность.</p>
  </div>
  const block5 = <div className='flex flex-col gap-5 p-5'>
    <p><span className='font-bold'>Внутренние Нейро-ассистенты</span>: Наши AI-решения ускоряют онбординг сотрудников, интегрируясь в корпоративные системы для оптимизации рабочих процессов и сокращения времени адаптации.</p>
    <p><span className='font-bold'>Клиентские Нейро-ассистенты</span>: Разработка чат-ботов для веб-сайтов, которые обеспечивают динамичное и эффективное общение с клиентами, повышая уровень обслуживания и удовлетворенность пользователей.</p>
  </div>
  
  const [blockShown, setBlockShown] = useState(block1)

  const blocksArray = [block1,block2,block3,block4,block5]

  const service_1 = 'Разработка ИИ-решений'
  const service_2 = 'ИИ-консалтинг'
  const service_3 = 'DevOps и облачные решения'
  const service_4 = 'Аналитика и инженерия данных'
  const service_5 = 'Нейро-ассистенты'

  const servicesArray = [service_1,service_2,service_3,service_4,service_5]

    const findText =(i) => {
    console.log(i)
    const res = blocksArray.find((text, index) => i === index)
    console.log(res.props.children)
    setBlockShown(res)    
    }

  return (
    <div className='container_body shrink-body'>
      <p className='title my-5 font-bold text-center xl:my-2'>IT-услуги</p>
      <div className='it_table gap-14 my-20 xl:my-14 lg:my-10 xl:gap-9 lg:gap-7 md:gap-2'>
        <div className='flex flex-col justify-start'>
            {servicesArray.map((service, i)=><li className='it-title-li' onClick={()=>findText(i)} key={i}><p className='it_title rounded'>{service}</p></li> )}
        </div>
        <div className='it_text rounded'>{blockShown}</div>
      </div>
    </div>
  )
}
