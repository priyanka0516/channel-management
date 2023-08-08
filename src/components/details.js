import React from 'react';
import Iframe from 'react-iframe';
export default function Details() {
  return (
    <>
    <div className='contact-banner'>
        <div className="container text-center">
            <div className="row">
                <div className="col-lg-12">
                    {/* <h3 className='top-text'>Contact Us</h3> */}
                </div>
            </div>
		</div>
    </div>
    <div className='room-detail'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='landingcard2'>
                        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.188577567174!2d85.7408903143954!3d20.29246011788201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1907e655555555%3A0x3f6fe26d44d5028b!2sQUOTUS%20SOFTWARE%20SOLUTIONS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1669873461046!5m2!1sen!2sin"      
                        width="100%"
                        id="myId"
                        height="270px"
                        className="myClassname"
                        />
                    </div>   
                </div>
                <div className='col-md-8'>
                    <div className='landingcard'>
                        <div className='row'>
                                  <h3 className='nameHotel'>Treebo Trend Lands End Beach Resort Morjim</h3>
                                  <p style={{textAlign:"left"}}>Near IDX Tower</p>
                            <div className='col-md-4'>
                                <img src={require('./assets/pic1.jpg')} alt="image3" className="hotels-pic" />
                                <img src={require('./assets/pic2.jpg')} alt="image3" className="hotels-pic2" />
                            </div>
                            <div className='col-md-8'>
                                <img src={require('./assets/pic-3.jpg')} alt="image3" className="hotels-pic" />
                            </div>
                            <div className='row'>
                                    <div className='col-md-3'>  <img src={require('./assets/pic1.jpg')} alt="image3" className="hotels-pic2" /></div>
                                    <div className='col-md-3'>  <img src={require('./assets/pic1.jpg')} alt="image3" className="hotels-pic2" /></div>
                                    <div className='col-md-3'>  <img src={require('./assets/pic1.jpg')} alt="image3" className="hotels-pic2" /></div>
                                    <div className='col-md-3'>  <img src={require('./assets/pic1.jpg')} alt="image3" className="hotels-pic2" /></div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>  
            <div className='row'>
                <div className='landingcard'> 
                <h5>Amenities</h5>          
                    <div className='amneties'>
                        <div className='amneties-1'>
                            <img src={require('./assets/free-wifi-black.png')} alt="image3" />
                            <p>Free wifi</p>
                        </div>
                        <div className='amneties-1'>
                            <img src={require('./assets/english-breakfast.png')} alt="image3" />
                            <p>Breakfast</p>
                        </div>
                        <div className='amneties-1'>
                            <img src={require('./assets/ac.png')} alt="image3" />
                            <p>AC</p>
                        </div>                        
                        <div className='amneties-1'>
                            <img src={require('./assets/parking1.png')} alt="image3" />
                            <p>Parking</p>
                        </div>
                        <div className='amneties-1'>
                            <img src={require('./assets/rs.png')} alt="image3" />
                            <p>Room Service</p>
                        </div>
                        <div className='amneties-1'>
                            <img src={require('./assets/smalltv.png')} alt="image3" />
                            <p>Tv</p>
                        </div>
                    </div>   
                </div>
                  </div>
                <div className='row'>
                    <div className='landingcard'> 
                       <h3>Description</h3>   
                        <p> Stay is conveniently situated in Bhubaneswar. This budget hotel has all the amenities you need for a comfortable stay and is just 20 km from Nandankanan Zoological Park and 4 km from Udaygiri and Khandagiri Caves.</p>
                        <h5>Hotel policies</h5>          
                        <div className='policies'>
                            <ul>
                                <li><p>Couples are welcome</p></li>
                                <li><p>Guests can check in using any local or outstation ID proof (PAN card not accepted).</p></li>
                                <li><p>As a complimentary benefit, your stay is now insured by Acko.</p></li>
                                <li><p>This hotel is serviced under the trade name of Sri Krishna Palace as per quality standards of Crown.</p></li>
                            </ul>
                        </div>   
                    </div>
                </div>
            </div>
          </div>
          <div className='xxx'>
              <div className='container'>
                  <div className='row'>
                          <div className='col-md-6'>
                      <div className='booking-right'>
                          <div>
                              <div className='book-right-top'>
                              <div className='all-left'>
                                      <h3 className='all-text-heading'>Treebo Trend Lands End Beach Resort Morjim</h3>
                  <div className='hotel-rating'>
                    <div className='rating'><span>3.9    <img src={require('./assets/star.png')} alt="about" /></span></div>
                                      <p>1Ratings</p>
                                      <p>Fabulous</p>
                                  </div>
                    <h6 className='span-heading'>1 Night</h6>
                    </div>
                  <div className='hotel-image'>
                 <img src={require('./assets/superior2.jpeg')} alt="about" id="about-image"/>
                  </div>
                              </div>
                              <div className='book-right-bottom'>
                              <div className='c2'>
                              <div className="c2-left">
                                <div className='c2-left-icon'><img src={require('./assets/calendar.png')} alt="about" id="about-image"/></div>
                                <div className='dates'>             
                                <span>Fri, 19 June</span>
                                  <span>-</span>
                                  <span>Sat, 2 June</span></div>   
                                </div>
                                    <div className="c3"><span>1 Room, 2 Guests</span></div>  
                                </div>               
                                    <div className='c4'>
                                      <div className='c5'>
                                          <div className="c-7">Room price for 1 Night X 2 Guests</div>
                                          <div className="c-8">₹1961</div>
                                      </div>
                                  </div>
                                    <div className='c4'>
                                      <div className='c5'>
                                          <div className="c-7">Instant Discount</div>
                                          <div className="c-8">-₹961</div>
                                      </div>
                                  </div>
                                    <div className='c4'>
                                      <div className='c5'>
                                          <div className="c-7">58% Coupon Discount</div>
                                          <div className="c-8">-₹763</div>
                                      </div>
                                  </div>
                                  <div className='bar'></div>
                                   <div className='c4'>
                                      <div className='c5'>
                                        <div className="c-7">Payable Amount</div>
                                          <div className="c-8">₹549</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>                      
                </div>
                  </div>
              </div>
          </div>
    </>
  )
}
