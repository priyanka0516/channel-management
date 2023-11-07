import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Service() {
     const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 10,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true,
          dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
          slidesToShow: 3,
          slidesToScroll: 1
          }
        },
        {
          breakpoint: 320,
          settings: {
          slidesToShow: 3,
          slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <>
      <div className='contact-banner'>
        <div className="container text-center">
			    <div className="row">
				    <div className="col-lg-12">
              <h3 className='top-text'>Services</h3>
				    </div>
          </div>
        <div className='x'>
          <div className='container'>
            <div className="row">
              <div className="col-lg-12">
                <Slider {...settings}>
                  <div className="">
                    <img src={require('./assets/parking.png')} alt="image3"/>
                  </div>
                  <div className="">
                    <img src={require('./assets/free-wifi.png')} alt="image3"/>
                  </div>
                  <div className="">
                    <img src={require('./assets/air-conditioner.png')} alt="image3"/> 
                  </div>
                  <div className="">
                    <img src={require('./assets/generator.png')} alt="image3"/> 
                  </div>
                  <div className="">
                    <img src={require('./assets/geyser.png')} alt="image3"/>
                  </div>
                  <div className="">
                    <img src={require('./assets/tv.png')} alt="image3"/>
                  </div>
                  <div className="">
                    <img src={require('./assets/cleaning-cart.png')} alt="image3"/>
                  </div>
                  <div className="">
                    <img src={require('./assets/breakfast.png')} alt="image3"/>
                  </div>
                  <div className="">
                    <img src={require('./assets/swimming-pool.png')} alt="image3"/>
                  </div>
                  <div className="">
                    <img src={require('./assets/breakfast.png')} alt="image3"/>
                  </div>
                  <div className="">
                    <img src={require('./assets/tv.png')} alt="image3"/>
                  </div>
                  <div className="">
                    <img src={require('./assets/geyser.png')} alt="image3"/>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
		  </div>
      </div>
      <div className='service-area'>
        <div className='container'>
          <div className='row'></div>
            <div className="col-md-12">
              <h2 className='why-us-h3'>We are Offering</h2>
            </div>
            <div className='row mt-5 wow fadeInUp '>
            <div className='col-md-4'>
            <div className="why-choose-column">
            <img src={require('./assets/wheelchair.gif')} id="tech_logo" alt="wheelchair"/>
              <div className="all-service">
                <h3>Handicapped Facility</h3>
                <p>Including handicapped facilities in  our hotel rooms is a commendable initiative to ensure inclusivity and accessibility for all guests.</p>
              </div>
            </div>
            </div>
            <div className='col-md-4'>
            <div className="why-choose-column">
            <img src={require('./assets/room-service.gif')} id="tech_logo" alt='Workflow'/>
              <div className="all-service">
                <h3>Room services</h3>
                <p>we are Offering room services in our hotel</p>
              </div>
            </div>
            </div>
            <div className='col-md-4'>
            <div className="why-choose-column">
            <img src={require('./assets/free-wifi.gif')} id="tech_logo" alt='Workflow'/>
              <div className="all-service">
                <h3>Free Wifi</h3>
                <p>We are offering wifi connections in our hotel rooms,for our guests.</p>
              </div>
            </div>
            </div>
            <div className='col-md-4'>
            <div className="why-choose-column">
            <img src={require('./assets/tv.gif')} id="tech_logo" alt='Workflow'/>
              <div className="all-service">
                <h3>Tv</h3>
                <p>We are taking care of our guests by offering them entertainment and convenience.</p>
              </div>
            </div>
            </div>
            <div className='col-md-4'>
            <div className="why-choose-column">
              <img src={require('./assets/swimming-pool.gif')} id="tech_logo" alt='Workflow'/>
              <div className="all-service">
                <h3>Swimming-pool</h3>
                <p>We are offering swimming pools in our hotel rooms, it can be a unique and enticing feature for our guests. Having a private swimming pool within a hotel room can provide a luxurious and exclusive experience, appealing to guests who value privacy and convenience.</p>
              </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className="why-choose-column">
                <img src={require('./assets/air-conditioner.gif')} id="tech_logo" alt='Workflow'/>
                <div className="all-service">
                  <h3>Ac</h3>
                  <p>AC(Air Conditioning)service in our hotel rooms is a common amenity for the comfort of their guests.</p>
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
