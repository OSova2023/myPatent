import './App.css';
import './media.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Routes, Route} from 'react-router-dom'
import About from './components/about/About'
import Contacts from './components/contacts/Contacts'
import Feedback from './components/Feedback'
import ItServices from './components/ItServices'
import Services from './components/Services'
import Error from './components/Error'
import Agreements from './components/agreements/Agreement';


function App({props}) {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/itservices' element={<ItServices />} />
          <Route path='/services' element={<Services />} />
          <Route path='/agreements' element={<Agreements />} />
          <Route path='/*' element={<Error />} />
      </Routes>
        <Footer />
      </div>
  );
}

export default App;
