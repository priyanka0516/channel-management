import React from 'react';
import Bookingform from './bookingform';
import Iframe from 'react-iframe';
import { Link } from 'react-router-dom';
export default function Hotel() {
    return (
    <>
    <div className="banner-section">      
        <div className="inner-banner">      
            <div className='container'>
                <div className="row">
                    <Bookingform/>
                </div>
            </div>
        </div>
    </div>
    <div className="all-hotel">
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
                    <div className='col-md-4'>
                        <div className='a'>
                            <img src={require('./assets/mari.jpg')} alt="image3" className="hotels-pic" />
                        </div>         
                    </div>
                    <div className='col-md-8'>
                        <div className="card-container">
                            <div className="left-content">
                            <h5>Hotel MariGold</h5>
                            <p>Goa</p>
                            </div>
                        <div className="right-content">
                            <p>Good</p>
                            <span>201 review</span>            
                        </div>
                        </div>
                        <div className='down-part'>
                        <div className="card-container">
                            <div className="left-content">
                            <h6>Deluxe King Room</h6>
                            <div className="grey-text">2 extra-large double beds</div>
                            <div className="lightblack-text">FREE cancellation .No prepayment needed</div>
                            <div className="green-text">You can cancel later, so lock in this great price today.</div>
                            <div className="red-text">Only 3 rooms left at this price on our site</div>
                            </div>
                            <div className="right-content">
                                <div className="lightblack-text">1 Night,2 Adults</div>
                                <h6>₹ 12,377</h6>
                                <div className="lightblack-text">+₹ 3,689 taxes & fees</div>
                                <div className=''><Link to="/details"><button>See Availability</button></Link></div>
                            </div>
                        </div>       
                        </div>
                    </div>
                </div>
                </div> 
                <div className='landingcard'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='a'>
                            <img src={require('./assets/sea-saphire.jpg')} alt="image3"className="hotels-pic" />
                        </div>         
                    </div>
                    <div className='col-md-8'>
                        <div className="card-container">
                            <div className="left-content">
                            <h5>Sea Sapphire</h5>
                            <p>Goa</p>
                            </div>
                        <div className="right-content">
                            <p>Good</p>
                            <span>201 review</span>            
                        </div>
                        </div>
                        <div className='down-part'>
                        <div className="card-container">
                            <div className="left-content">
                            <h6>Deluxe King Room</h6>
                            <div className="grey-text">2 extra-large double beds</div>
                            <div className="lightblack-text">FREE cancellation .No prepayment needed</div>
                            <div className="green-text">You can cancel later, so lock in this great price today.</div>
                            <div className="red-text">Only 3 rooms left at this price on our site</div>
                            </div>
                            <div className="right-content">
                                <div className="lightblack-text">1 Night,2 Adults</div>
                                <h6>₹ 12,377</h6>
                                <div className="lightblack-text">+₹ 3,689 taxes & fees</div>
                                <div className=''><button>See Availability</button></div>
                            </div>
                        </div>       
                        </div>
                    </div>
                </div>
                </div>    
                <div className='landingcard'>
                <div className='row'>
                    <div className='col-md-4'>
                        <div className='a'>
                            <img src={require('./assets/la-vera.jpg')} alt="image3" className="hotels-pic" />
                        </div>         
                    </div>
                    <div className='col-md-8'>
                        <div className="card-container">
                            <div className="left-content">
                            <h5>La Vera Boutique Hotel</h5>
                            <p>Goa</p>
                            </div>
                        <div className="right-content">
                            <p>Good</p>
                            <span>201 review</span>            
                        </div>
                        </div>
                        <div className='down-part'>
                        <div className="card-container">
                            <div className="left-content">
                            <h6>Deluxe King Room</h6>
                            <div className="grey-text">2 extra-large double beds</div>
                            <div className="lightblack-text">FREE cancellation .No prepayment needed</div>
                            <div className="green-text">You can cancel later, so lock in this great price today.</div>
                            <div className="red-text">Only 3 rooms left at this price on our site</div>
                            </div>
                            <div className="right-content">
                                <div className="lightblack-text">1 Night,2 Adults</div>
                                <h6>₹ 12,377</h6>
                                <div className="lightblack-text">+₹ 3,689 taxes & fees</div>
                                <div className=''><button>See Availability</button></div>
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
