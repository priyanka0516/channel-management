
import './App.css';
import About from './components/about';
import Home from './components/home';
import Header from './components/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rooms from './components/rooms';
import Service from './components/service';
import Dining from './components/dining';
import Contact from './components/contact';
import Footer from './components/footer';
import Bookingform from './components/bookingform';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/rooms' element={<Rooms />} />
        <Route path='/service' element={<Service />} />
          <Route path='/dining' element={<Dining />} />
          <Route path='/contact' element={<Contact />} />
               <Route path='/booking' element={<Bookingform/>}/>
        </Routes> 
        <Footer/>
    </BrowserRouter>
    </div>
  );
}
export default App;
