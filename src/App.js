import './App.css';
import './media.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
// import { Routes, Route} from 'react-router-dom'
import About from './components/about/About'
import Contacts from './components/contacts/Contacts'
import Feedback from './components/Feedback'
import ItServices from './components/ItServices'
import Services from './components/Services'
import CompanyDetails from './components/company_details/CompanyDetails.jsx'
import Thanx from './components/thanx/Thanx.jsx';
import { useRef } from 'react';
import { useState } from 'react';

function App(props) {

  const [isClickedBurger, setIsClickedBurger] = useState(false)

  const aboutRef = useRef()
  const feedbackRef = useRef()
  const contactRef = useRef()
  const servRef = useRef()
  const itRef = useRef()
  const thanxRef = useRef()
  const detailsRef = useRef()
    
  function handleScrollTo(r) {
    console.log(r)
    setTimeout(setIsClickedBurger(false),10000)
    r.current?.scrollIntoView({behavior: 'smooth'})
    console.log(document.scrollY)
  }

  return (
      <div className="App">
        <Header handleScrollTo={handleScrollTo} aboutRef={aboutRef} 
                feedbackRef={feedbackRef} servRef={servRef} itRef={itRef} 
                contactRef={contactRef} setIsClickedBurger={setIsClickedBurger} isClickedBurger={isClickedBurger}/>
        <div className="strip mb-40 xl:mb-36 lg:mb-32" ref={aboutRef}>&nbsp;</div>
        <About handleScrollTo={handleScrollTo} contactRef={contactRef} thanxRef={thanxRef} feedbackRef={feedbackRef}/>
        <div className="strip my-20 xl:my-12 900px:my-8 md:my-6 mx-40 2xl:mx-30 xl:mx-20 lg:mx-10 md:mx-5 sm:mx-1" ref={servRef}>&nbsp;</div>
        <Services /> 
        <div className="strip my-20 xl:my-12 900px:my-8 md:my-6 mx-40 2xl:mx-30 xl:mx-20 lg:mx-10 md:mx-5 sm:mx-1" ref={itRef}>&nbsp;</div>
        <ItServices />
        <div className="strip my-20 xl:my-12 900px:my-8 md:my-6 mx-40 2xl:mx-30 xl:mx-20 lg:mx-10 md:mx-5 sm:mx-1" ref={contactRef}>&nbsp;</div>
        <Contacts/>
        <div className="strip my-20 xl:my-12 900px:my-8 md:my-6 mx-40 2xl:mx-30 xl:mx-20 lg:mx-10 md:mx-5 sm:mx-1" ref={feedbackRef}>&nbsp;</div>
        <Feedback /> 
        <div className="strip my-20 xl:my-12 900px:my-8 md:my-6 mx-40 2xl:mx-30 xl:mx-20 lg:mx-10 md:mx-5 sm:mx-1" ref={thanxRef}>&nbsp;</div>
        <Thanx thanxRef={thanxRef} handleScrollTo={handleScrollTo}/>
        <div className="strip my-20 xl:my-12 900px:my-8 md:my-6 mx-40 2xl:mx-30 xl:mx-20 lg:mx-10 md:mx-5 sm:mx-1" ref={detailsRef}>&nbsp;</div>
        <CompanyDetails /> 
        <button className={`up_active button_up fixed bottom-20 left-7 rounded-full`} onClick={()=>handleScrollTo(aboutRef)}>&#10148;</button>
        <Footer thanxRef={thanxRef} handleScrollTo={handleScrollTo} detailsRef={detailsRef} servRef={servRef} itRef={itRef} contactRef={contactRef}/>
      </div>
  );
}

export default App;
