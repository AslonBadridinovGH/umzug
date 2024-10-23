import './App.scss';
import Beiladung from './pages/beiladung/Beiladung';
import Contact from './pages/contact';
import Ablauf from './pages/home/Ablauf';
import Home from './pages/home/Home';
import Header from './pages/navbar';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'; 

import ContactEmail from './pages/beiladung/contact';
import PhoneWhatsApp from './pages/phonewhat';
import Leistung from './pages/home/Leistung';


function App() {
  return (

    <div className="App">
      <Router>
        <Routes>
            <Route path='/' element={ <Header/> }>
              <Route index element={ <Home/> }/> 

              <Route path='/home' index element={ <Home/> }/>
              <Route path='/leistung' index element={ <Leistung/> }/>
              <Route path='/ablauf' element={ <Ablauf/> }/>
              <Route path='/contactEmail' element={<Beiladung /> }/>
              <Route path='/contact' element={<Contact/> }/>
              {/* <Route path='/contactEmail' element={<ContactEmail /> }/> */}
            </Route>
        </Routes>
      </Router>       
    </div>

  );
}

export default App;
