import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import { Card, CardGroup, Container } from 'react-bootstrap';
import "slick-carousel/slick/slick-theme.css";
import Iframe from 'react-iframe';
import Bookingform from "./bookingform";
import { Link } from "react-router-dom";
function Home() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
            dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
     var hoteldestination = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 6,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
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
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
   var hotels = {
      dots: false,
      infinite: true,
     speed: 500,
       autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
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
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <>
      <div className="banner-section">      
          <div className="inner-banner">      
            <div className='container'>
              <div className="row">
                <Bookingform/>
        {/* <Slider {...settings}>
        <div className="image-section">
            <img src={require('./assets/image4.jpg')} alt="image1"/>
        </div>
        <div className="image-section">
            <img src={require('./assets/image2.jpg')} alt="image2"/>
        </div>
        <div className="image-section">
            <img src={require('./assets/image1.jpg')} alt="image3"/>
        </div>     
            </Slider> */}
        
           {/* <div className="banner-container">
      <h2>Book Your Stay</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="checkIn">Check-in:</label>
          <input
            type="text"
            id="checkIn"
            name="checkIn"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="checkOut">Check-out:</label>
          <input
            type="text"
            id="checkOut"
            name="checkOut"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="adults">Adults:</label>
          <input
            type="number"
            id="adults"
            name="adults"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="children">Children:</label>
          <input
            type="number"
            id="children"
            name="children"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="numOfRooms">Number of Rooms:</label>
          <input
            type="number"
            id="numOfRooms"
            name="numOfRooms"
            value={numOfRooms}
            onChange={(e) => setNumOfRooms(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="promoCode">Promo Code:</label>
          <input
            type="text"
            id="promoCode"
            name="promoCode"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
        </div>
        <button type="submit" className="btn-book-now">Book Now</button>
      </form>
    </div>       */}
              </div>
            </div>
        </div>
      </div>
      {/* <section className="about-section">
        <div className="container">
            <div className="row">                
              <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="title">About Us</span>
                    <h2>We are leader in <br/>Hotel Services</h2>
                  </div>
                  <div className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.</div>
                  </div>
                </div>
                <div className="image-column col-lg-6 col-md-6 col-sm-6">
                  <img src={require('./assets/image5.jpg')} alt="about" id="about-image"/>
                </div>
            </div>
                </div>
                <div className="container" style={{marginTop:'25px'}}>
                    <div className="row">
                        <div className="col-md-4">
                        <div className="card-section">
                          <img src={require('./assets/room.png')} alt="about" />
                            <div className="card-content">
                              <h3>ROOMS</h3>
                              <p>Beata Garden has a total of 68 Units distributed on Standard Bedroom, and apartments of One and Two Bedrooms, tastefully furnished in a contemporary style to match all visitors tastes, the rooms are equipped with Smart TVs, Mini-Fridge, Safe Deposit and IDD Call Phone, Invigorating Shower, Extra King or Twin Beds.</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                        <div className="card-section">
                                <img src={require('./assets/chair.png')} alt="about" />
                                <div className="card-content">
                                <h3>DINING</h3>
                                <p>La Tazza Café where you can enjoy your morning coffee with a fresh daily maid bakery and finest dessert. Also if you felt hungry you can try one of our sandwiches with fresh and healthy salads.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                         <div className="card-section">
                            <img src={require('./assets/service.png')} alt="about" />
                                <div className="card-content">
                                <h3>FACILITIES</h3>
                                <p>Spa,Swimming Pool,Sauna,Steam Room,Fully Equipped Gym,Café,Car parking,Disable Rooms & Interconnecting Rooms,24 Hour Security</p>
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
      </section> */}
      {/* <section id="reservation-section">
			<div className="container">
				<div className="reservation-box">
					<div className="row">
						<div className="col-md-6">
							<div className="title-section white">
								<h1>Why Choose Us</h1>
                    <p>Booking a table has never been so easy with free &amp; instsstant online <br /> restaurant reservations, booking now!!</p>
                      <div className="row">
                    <div className="col-md-6">
                    <ul className="services">
                    <li><img src={require('./assets/parking.png')} alt="image3"/>Parking</li>
                    <li><img src={require('./assets/free-wifi.png')} alt="image3"/>Free Wifi</li>
                    <li><img src={require('./assets/air-conditioner.png')} alt="image3"/>Air-conditioner</li>
                  </ul>
                      </div>
                  <div className="col-md-6">
                  <ul className="services">
                    <li><img src={require('./assets/generator.png')} alt="image3"/>Power Backup</li>
                    <li><img src={require('./assets/tv.png')} alt="image3"/>Tv</li>
                    <li><img src={require('./assets/geyser.png')} alt="image3"/>Geyser</li>
                  </ul>
                    </div>   
                      </div> 
                  </div>
						</div>
					</div>
				</div>
			</div>
        </section> */}
        <section id="landing-hotels">
          <div className="container">
            <div className="landingcard">
              <h2>Trending Destinations</h2>
              <div className="trending-hotellist">
              <div className="row">
                <div className="col-md-6">
                  <div className="trends">
                    <img src={require('./assets/himachal.jpg')} alt="image3" className="hotels-desitnation-slider" />
                    <div className="gest"><p>Himachal Pradesh</p></div>
                  </div> 
                </div>
                  <div className="col-md-6">
                    <div className="trends">
                      <img src={require('./assets/mumbai.jpg')} alt="image3" className="hotels-desitnation-slider" />
                       <div className="gest"><p>Mumbai</p></div>
                  </div> 
                </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="trends">
                      <img src={require('./assets/chennai.jpg')} alt="image3" className="hotels-desitnation-slider" />
                      <div className="gest"><p>Chennai</p></div>
                    </div> 
                  </div>
                    <div className="col-md-4">
                    <div className="trends">
                      <img src={require('./assets/delhi.jpg')} alt="image3" className="hotels-desitnation-slider" />
                      <div className="gest"><p>New Delhi</p></div>
                    </div> 
                  </div>
                    <div className="col-md-4">
                    <div className="trends">
                      <img src={require('./assets/vanaras.jpg')} alt="image3" className="hotels-desitnation-slider" />
                      <div className="gest"><p>Banaras</p></div>
                    </div> 
                  </div>
                </div>
              </div>
              <div className="hotel-desitnation">
                <div>
                <h2>Explore India</h2>
                <Slider {...hoteldestination}>
                  <div className="hotel-desitnation-place">
                  <Link to="/hotel">
                    <img src={require('./assets/goa.jpg')} alt="image3" className="hotels-desitnation-slider" />
                    <p>Goa</p>
                  </Link>
                </div>
                  <div className="hotel-desitnation-place">
                  <img src={require('./assets/manali.jpg')} alt="image3" className="hotels-desitnation-slider" />
                  <p>Manali</p>
                </div>
                 <div className="hotel-desitnation-place">
                  <img src={require('./assets/lonavala.jpg')} alt="image3" className="hotels-desitnation-slider"/>
                  <p>Lonavala</p>
                </div>
                <div className="hotel-desitnation-place">
                  <img src={require('./assets/bangalore.jpg')} alt="image3" className="hotels-desitnation-slider" />
                  <p>Banglore</p>
                </div>
                <div className="hotel-desitnation-place">
                  <img src={require('./assets/rishikesh.jpg')} alt="image3"className="hotels-desitnation-slider" />
                  <p>Rishikesh</p>
                </div>
                  <div className="hotel-desitnation-place">
                  <img src={require('./assets/mumbai.jpg')} alt="image3" className="hotels-desitnation-slider" />
                  <p>Mumbai</p>
                </div>
                  <div className="hotel-desitnation-place">
                  <img src={require('./assets/Shimla.jpg')} alt="image3" className="hotels-desitnation-slider" />
                  <p>Shimla</p>
                </div>
                <div className="hotel-desitnation-place">
                  <img src={require('./assets/ooty.jpg')} alt="image3" className="hotels-desitnation-slider"/>
                  <p>Ooty</p>
                </div>
              </Slider>
              </div>  
              </div>
              <div className="hotel-type">
                <div>
                <h2>Browse by property type </h2>
                <Slider {...hotels}>
                <div className="hotel-item">
                  <img src={require('./assets/hotel.jpg')} alt="image3" className="hotels-slider" />
                  <p>Hotels</p>
                </div>
                <div className="hotel-item">
                  <img src={require('./assets/hillstation.jpg')} alt="image3" className="hotels-slider" />
                  <p>Hill station</p>
                </div>
                <div className="hotel-item">
                  <img src={require('./assets/poolvilla.jpg')} alt="image3" className="hotels-slider" />
                  <p>Pool Villas</p>
                </div>
                <div className="hotel-item">
                  <img src={require('./assets/apartment.jpg')} alt="image3" className="hotels-slider" />
                  <p>Apartments</p>
                </div>
                <div className="hotel-item">
                  <img src={require('./assets/resort.jpg')} alt="image3" className="hotels-slider" />
                  <p>Resorts</p>
                </div>
                <div className="hotel-item">
                  <img src={require('./assets/cottage.jpg')} alt="image3" className="hotels-slider" />
                  <p>Cottages</p>
                </div>
                <div className="hotel-item">
                  <img src={require('./assets/glamping.jpg')} alt="image3" className="hotels-slider" />
                  <p>Glamping</p>
                </div>
                <div className="hotel-item">
                  <img src={require('./assets/guest-house.jpg')} alt="image3" className="hotels-slider" />
                  <p>Guest Houses</p>
                </div>
              </Slider>
              </div>  
              </div>
            </div> 
          </div>
        </section>
      <section className="map">
            <div className="row">
              <div className="col-md-12">
                 <div id="map">   
                         <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.188577567174!2d85.7408903143954!3d20.29246011788201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1907e655555555%3A0x3f6fe26d44d5028b!2sQUOTUS%20SOFTWARE%20SOLUTIONS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1669873461046!5m2!1sen!2sin"      
                        width="100%"
                        id="myId"
                        height="320px"
                        className="myClassname"
                        />
                        </div>    
              </div>
            </div>
      </section>
      </>
  );
}
export default Home;

