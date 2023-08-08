import React from 'react'

export default function Viewdeatils() {
  return (
    <>
      <div className='Viewdeatils-banner'>
        <div className="container text-center">
		      <div className="row">
				    <div className="col-lg-12">
				  </div>
			  </div>
		    </div>
      </div>
      <div className="view-details-about">
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <div className='view-details-about-left'>
                <h3>Capital O Sri Krishna Palace Near Sum Hospital</h3>
                  <p>Near Sum Hospital, Gothapatana, Khurdha, Bhubaneswar</p>  
                    <div className='row'>
                      <h3>Amenities</h3>
                        <div className='col-md-4'>
                          <div className='view-flex'>
                            <img src={require('./assets/ac.png')} alt="superior2"/>
                            <p>AC</p>
                          </div>
                        </div>
                        <div className='col-md-4'>
                          <div className='view-flex'>
                            <img src={require('./assets/free-wifi-black.png')} alt="superior2"/>
                            <p>Free-Wifi</p>
                          </div>
                        </div>
                                  <div className='col-md-4'>
                                        <div className='view-flex'>
                                         <img src={require('./assets/free-wifi-black.png')} alt="superior2"/>
                                          <p>Kitchen</p>
                                      </div></div>
                                  <div className='col-md-4'>
                                       <div className='view-flex'>
                                         <img src={require('./assets/television.png')} alt="superior2"  />
                                          <p>Tv</p>
                                      </div>
                                  </div>
                                  <div className='col-md-4'>
                                        <div className='view-flex'>
                                         <img src={require('./assets/geyser1.png')} alt="superior2"  />
                                          <p>Geyser</p>
                                      </div></div>
                                  <div className='col-md-4'>
                                    <div className='view-flex'>
                                      <img src={require('./assets/elevator.png')} alt="superior2" />
                                      <p>Elevator</p>
                                    </div>
                                  </div>
                                </div>
                                <div className='row'>
                                  <h3>Choose Your Room</h3>
                                  <div className="check-room">
                                      <div className='check-room-top'>
                                            <div className='check-room-top-inner'>
                                              <span className="c-text"><span>Selected Category</span></span>
                                            </div>
                                            <div className='check-room-middle-inner'>
                                                <div className="d-text-left">
                                                  <h4>Classic</h4>
                                                  <p>Room Size:144 sqft</p>
                                                </div>
                                                <div className="d-text-right">
                                                   <div className='hotel-image'>
                                                <img src={require('./assets/superior2.jpeg')} alt="about" id="about-image"/>
                                                </div>
                                                </div>
                                            </div>
                                            <div className='check-room-bottom-inner'>
                                          <div className="c-x"><div className="price">₹1234</div><span class="c-77737p">₹4522</span></div>
                                            </div>
                                      </div>
                                  </div>
                              </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                          <div className='view-details-right-left'>
                            <div className='booking-right'>
                            <div>
                              <div className='book-right-top'>
                              <div className='all-left'>
                                    <h3 className='all-text-heading'>Capital O Sri Krishna Palace Near Sum Hospital</h3>
                                        <div className='hotel-rating'>
                                        <div className='rating'><span>3.9<img src={require('./assets/star.png')} alt="about" /></span></div>
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
      </div>
    </>
  )
}
