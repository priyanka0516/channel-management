import React, { useState } from 'react';
const PaymentPage = () => {
     const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [errors, setErrors] = useState({});

  const handlepaymentSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Perform form submission logic here, e.g., send data to a server

    // Reset form fields and errors
    setCardNumber('');
    setCardHolderName('');
    setCvv('');
    setExpiryDate('');
    setErrors({});
  };

  const validateForm = () => {
    let errors = {};

    // Validate card number
    if (!cardNumber) {
      errors.cardNumber = 'Card number is required';
    } else if (!/^\d{16}$/.test(cardNumber)) {
      errors.cardNumber = 'Card number must be 16 digits';
    }

    // Validate card holder name
    if (!cardHolderName) {
      errors.cardHolderName = 'Cardholder name is required';
    }

    // Validate CVV
    if (!cvv) {
      errors.cvv = 'CVV is required';
    } else if (!/^\d{3}$/.test(cvv)) {
      errors.cvv = 'CVV must be 3 digits';
    }

    // Validate expiry date
    if (!expiryDate) {
      errors.expiryDate = 'Expiry date is required';
    } else if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      errors.expiryDate = 'Expiry date must be in format MM/YY';
    }

    return errors;
  };
    return (
      <div className='booking-Ending'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className="book-top"><span><span role="img" aria-label="discount">🎉</span> <span>Yay! you just saved ₹763 on this booking!</span></span></div>
                        <div className='booking-left'>
                          <div className='heading'> <h3>Billing Information</h3></div>                    
                          <p>We will use these details to share your booking information</p>
  <div className="payment-container">
      <h2>Payment Details</h2>

                                <form className="payment-form" onSubmit={handlepaymentSubmit}>
                                    <div className='row'>
        <div className="col-md-6">
          <label htmlFor="cardNumber">Card Number</label>
         <input
          type="text"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />
        {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
        </div>
        <div className="col-md-6">
          <label htmlFor="cardHolderName">Cardholder Name</label>
       <input
          type="text"
          id="cardHolderName"
          value={cardHolderName}
          onChange={(e) => setCardHolderName(e.target.value)}
          required
        />
        {errors.cardHolderName && <span className="error">{errors.cardHolderName}</span>}
        </div>
        <div className="col-md-6">
          <label htmlFor="expiryDate">Expiry Date</label>
           <input
          type="date"
          id="expiryDate"
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
          required
        />
        {errors.expiryDate && <span className="error">{errors.expiryDate}</span>}
        </div>

         <div className="col-md-6">
          <label htmlFor="cvv">CVV</label>
          <input
          type="text"
          id="cvv"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          required
        />
        {errors.cvv && <span className="error">{errors.cvv}</span>}
        </div>
        <div className="col-md-12">
        <button type="submit">Pay Now</button></div>
        </div>
      </form>
    </div>
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
    // <div className="payment-container">
    //   <h2>Payment Details</h2>

    //   <form className="payment-form">
    //     <div className="form-group">
    //       <label htmlFor="cardNumber">Card Number</label>
    //       <input type="text" id="cardNumber" name="cardNumber" />
    //     </div>

    //     <div className="form-group">
    //       <label htmlFor="expiryDate">Expiry Date</label>
    //       <input type="text" id="expiryDate" name="expiryDate" />
    //     </div>

    //     <div className="form-group">
    //       <label htmlFor="cvv">CVV</label>
    //       <input type="text" id="cvv" name="cvv" />
    //     </div>

    //     <div className="form-group">
    //       <label htmlFor="cardHolderName">Cardholder Name</label>
    //       <input type="text" id="cardHolderName" name="cardHolderName" />
    //     </div>

    //     <button type="submit">Pay Now</button>
    //   </form>
    // </div>
  );
};

export default PaymentPage;
