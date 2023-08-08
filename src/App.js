
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
import BookNow from './components/booknow';
import Bookingroom from './components/bookingroom';
import PaymentPage from './components/paymentpage';
import Login from './components/Login';
import Forgotpassword from './components/forgotpassword';
import Hotel from './components/hotel';
import Details from './components/details';
import Viewdeatils from './components/view-deatils';
import Destination from './components/destination';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/rooms' element={<Rooms/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/dining' element={<Dining/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/booking' element={<Bookingform/>}/>
        <Route path='/booknow' element={<BookNow/>}/>
        <Route path='/bookroom' element={<Bookingroom/>}/>
        <Route path='/paymentpage' element={<PaymentPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/forgotpassword' element={<Forgotpassword />} />
        <Route path='/hotel' element={<Hotel />} />
        <Route path='/details' element={<Details />} />
        <Route path='/viewdetails' element={<Viewdeatils />} />
        <Route path='/destination' element={<Destination />} />
      </Routes> 
      <Footer/>
    </BrowserRouter>
    </div>
  );
}
export default App;
