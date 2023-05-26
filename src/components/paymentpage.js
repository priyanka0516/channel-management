import React, { useState } from 'react';
const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCVV] = useState('');
  const [errors, setErrors] = useState({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

const handleCardNumberChange = (event) => {
    const value = event.target.value;
    const numberValue = value.replace(/\D/g, ''); // Remove non-digit characters

    setCardNumber(numberValue);
  };

  const handleCardHolderNameChange = (event) => {
    const value = event.target.value;
    const alphaNumericValue = value.replace(/[^a-zA-Z0-9 ]/g, ''); // Remove non-alphanumeric characters

    setCardHolderName(alphaNumericValue);
  };

  const handleExpiryMonthChange = (event) => {
    const value = event.target.value;
    const numberValue = value.replace(/\D/g, ''); // Remove non-digit characters

    setExpiryMonth(numberValue);
  };

  const handleExpiryYearChange = (event) => {
    const value = event.target.value;
    const numberValue = value.replace(/\D/g, ''); // Remove non-digit characters

    setExpiryYear(numberValue);
  };

  const handleCVVChange = (event) => {
    const value = event.target.value;
    const numberValue = value.replace(/\D/g, ''); // Remove non-digit characters

    setCVV(numberValue);
  };

  const handlepaymentSubmit = (event) => {
    event.preventDefault();
    openDialog();
    
    const validationErrors = {};

    if (cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
      validationErrors.cardNumber = 'Card number must be a 16-digit number.';
    }

    if (cardHolderName.trim() === '') {
      validationErrors.cardHolderName = 'Card holder name is required.';
    }

    if (expiryMonth.length !== 2 || !/^\d+$/.test(expiryMonth)) {
      validationErrors.expiryMonth = 'Expiry month must be a two-digit number.';
    }

    if (expiryYear.length !== 2 || !/^\d+$/.test(expiryYear)) {
      validationErrors.expiryYear = 'Expiry year must be a two-digit number.';
    }

    if (cvv.length !== 3 || !/^\d+$/.test(cvv)) {
      validationErrors.cvv = 'CVV must be a three-digit number.';
    }

    setErrors(validationErrors);

    // If there are no validation errors, proceed with form submission
    if (Object.keys(validationErrors).length === 0) {
      // Perform form submission logic here
    }
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
                                  id="card-number"
                                  value={cardNumber}
                                  onChange={handleCardNumberChange}
                                  maxLength={16}
                                  pattern="\d*"
                                  inputMode="numeric"
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
                                onChange={handleCardHolderNameChange}
                                required
                              />
                              {errors.cardHolderName && <span className="error">{errors.cardHolderName}</span>}
                              </div>
                            <div className="col-md-12">
                        <label htmlFor="expiryDate">Expiry Date</label>
                        <div className='row'>
                          <div className='col-md-6'>
                             <input
                              type="text"
                              id="expiry-month"
                              maxLength={2}
                              pattern="\d*"
                              inputMode="numeric"
                              value={expiryMonth}
                              onChange={handleExpiryMonthChange}
                              placeholder="MM"
                            />
                              {errors.expiryMonth && <span className="error">{errors.expiryMonth}</span>}
                          </div>
                          <div className='col-md-6'>
                            <input
                            type="text"
                            id="expiry-date"
                            value={expiryYear}
                            maxLength="2"
                            onChange={handleExpiryYearChange}
                            placeholder="YY"
                            />
                          {errors.expiryYear && <span className="error">{errors.expiryYear}</span>}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="cvv">CVV</label>
                        <input
                        type="text"
                        id="cvv"
                        maxLength={3}   
                        value={cvv}
                        onChange={handleCVVChange}
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
             {isDialogOpen && (
            <div className="dialog">
              <div className="dialog-content">
                      <h3>Payment Confirmation</h3>
                      <p>Please enter your One Time Password(OTP) sent to your registered Mobile No:</p>
                <p>Thank you for your payment!</p>
                <button onClick={closeDialog}>Close</button>
              </div>
            </div>
            )}
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
