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
                  <li className='flex'><span></span>7130 Olaya District, Bashar ibn Burd Street 3206, Al Khobar 34447
                    Saudi Arabia</li>
                  <li className='flex'><span></span><Link to="mailto: welcome@beatagarden.com"> xxx.com</Link></li>
                  <li className='flex'><span></span><Link to="tel: +91 6371499414">+91 0378499414</Link></li>
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
          <div className="footer-title">Partnership/Authorization</div>
            <ul className="members">
              {/* <li><a><img src={require('./../assets/google_client.png')}alt="client1"/></a></li>
              <li><a><img src={require('./../assets/tesla_client.png')}alt="client2"/></a></li>
              <li><a><img src={require('./../assets/expedia_client.png')}alt="client3"/></a></li>
              <li><a><img src={require('./../assets/booking_client.png')}alt="client4"/></a></li>
              <li><a><img src={require('./../assets/aws_client.png')}alt="client5"/></a></li> */}
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