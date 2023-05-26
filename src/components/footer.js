import React,{useState} from 'react';
import { Button } from 'react-bootstrap';
// import {FaArrowCircleUp} from 'react-icons/fa';
import { Link } from 'react-router-dom';
 
const Footer =()=>
{
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  window.addEventListener('scroll', toggleVisible);
  return (
<>
<div className='footer'>
  <div className='container'>
    <div className='row'>
      <div className='col-sm-4 col-xs-12 p-0'>
        <div className='footer-item address'>
          <ul>
            <li>
              <h6 className='footer-title'>Address</h6>
              <div className="des">
                <ul>
                  <li className='flex'><span><img src={require('./assets/location.png')}alt="mail"/></span>7130 Olaya District, Bashar ibn Burd Street 3206, Al Khobar 34447
                    Saudi Arabia</li>
                  <li className='flex'><span><img src={require('./assets/mail.png')}alt="mail"/></span><Link to="mailto: welcome@beatagarden.com">abc.com</Link></li>
                  <li className='flex'><span><img src={require('./assets/phone-call.png')}alt="mail"/></span><Link to="tel: +91 6371499414">+91 0378499414</Link></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='col-sm-4 col-xs-12'>
        <div className='footer-item'>
          <div className="footer-title">Our Services</div>
            <ul>
              <li className="animate"><Link to="/" onClick={scrollToTop}>Home</Link></li>
              <li className="animate"><Link to="/about" onClick={scrollToTop}>About Us</Link></li>
              <li className="animate"><Link to="/services" onClick={scrollToTop}>Services & Facilities</Link></li>
              <li className="animate"><Link to="/rooms" onClick={scrollToTop}>Rooms</Link></li>
              <li className="animate"><Link to="/dining" onClick={scrollToTop}>Dining</Link></li>
              <li className="animate"><Link to="/contact" onClick={scrollToTop}>Contact Us</Link></li>
            </ul>
        </div>
      </div>
      <div className='col-sm-4 col-xs-12'>
        <div className='footer-item'>
          <div className="footer-title">Follow Us On</div>
            <ul className="members">
              <li><Link to=""><img src={require('./assets/facebook-app.png')} alt="client1" /></Link></li>
              <li><Link to=""><img src={require('./assets/instagram-app.png')} alt="client1" /></Link></li>
              <li><Link to=""><img src={require('./assets/linkedin-app.png')}alt="client1"/></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
 <div className="container">
      <div className="copyright">
        &copy; Copyright <strong>Hotel</strong>.All Rights Reserved
      </div>
    </div>
</div>
{/* <Button id="top-bottom"onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}}>
     <FaArrowCircleUp  />
    </Button> */}
</>
)
}
export default Footer;