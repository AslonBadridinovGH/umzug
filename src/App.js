
import './App.scss';
import Beiladung from './pages/beiladung/Beiladung';
import ContactEmail from './pages/beiladung/contact';
import Contact from './pages/contact';
import Ablauf from './pages/home/Ablauf';
import Home from './pages/home/Home';
import Header from './pages/navbar';
import PhoneWhatsApp from './pages/phonewhat';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'; 


function App() {
  return (

    <div className="App">
      <Router>
        <Routes>
            <Route path='/' element={ <Header/> }>
              <Route index element={ <Home/> }/>
              <Route path='/home' index element={ <Home/> }/>
              <Route path='/ablauf' element={ <Ablauf/> }/>
              <Route path='/contactEmail' element={<ContactEmail /> }/>
              <Route path='/contact' element={<Contact/> }/>
              {/* <Route path='/PhoneWhatsApp' element={<PhoneWhatsApp /> }/> */}
            </Route>
        </Routes>
      </Router>       
    </div>

  );
}

export default App;
