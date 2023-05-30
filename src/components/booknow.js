import React, { useState } from 'react';
import { Link } from 'react-router-dom';
  const BookNow = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [otp, setOtp] = useState('');
  const [showContinueButton, setShowContinueButton] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedOtp = generateOtp();
    setOtp(generatedOtp);
    setShowContinueButton(true);
  };

  const handleContinue = () => {
    console.log('Continue button clicked');
  };

  const generateOtp = () => {
    // Generate a random 4-digit OTP
    return Math.floor(1000 + Math.random() * 9000);
  };
  return (
    <div className='booking-Ending'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className="book-top"><span><span role="img" aria-label="discount">🎉</span> <span>Yay! you just saved ₹763 on this booking!</span></span></div>
                        <div className='booking-left'>
                          <div className='heading'> <h3>Enter your details</h3></div>                    
                          <p>We will use these details to share your booking information</p>
                        <form onSubmit={handleSubmit} className='final-form'>
                        <div className='row'>
                            <div className="col-md-6">
                            <label htmlFor="fullName">Full Name:</label>
                            <input
                                type="text"
                                id="fullName"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                            />
                            </div>

                            <div className="col-md-6">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            </div>

        <div className="col-md-6">
          <label htmlFor="mobileNo">Mobile No:</label>
          <input
            type="tel"
            id="mobileNo"
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
            required
          />
        </div>

        {showContinueButton ? (
          <div className="col-md-6">
            <label htmlFor="otp">OTP:</label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
        ) : (
            <div className="col-md-6">
            <label htmlFor="otp">Enter OTP</label>
            <button type="submit" className='otp-button'>Send OTP</button>
          </div>
        )}

        {showContinueButton && (
          <div className="col-md-6">
            <Link to="/paymentpage"><button type="button" className='verify-button' onClick={handleContinue}>Continue</button></Link>
          </div>
                  )}
                              </div>
                          </form>
                        </div>
                </div>
                  <div className='col-md-6'>
                      <div className='booking-right'>
                          <div>
                              <div className='book-right-top'>
                              <div className='all-left'>
                                      <h3 className='all-text-heading'>SPOT ON 810979 JBH Residency</h3>
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
                                <div className='c2-left-icon'>   <img src={require('./assets/calendar.png')} alt="about" id="about-image"/></div>
                                <div className='dates'>             
                                <span>Fri, 19 May</span>
                                  <span>-</span>
                                  <span>Sat, 20 May</span></div>   
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
  );
};
export default BookNow;