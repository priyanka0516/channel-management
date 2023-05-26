import React, { useState } from 'react';
import Iframe from 'react-iframe';
const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

   const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted!', { name, email, subject, message });
      setSubmitted(true);
    }
    };
     const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (name.trim() === '') {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (email.trim() === '') {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
      isValid = false;
    }

    if (subject.trim() === '') {
      errors.subject = 'Subject is required';
      isValid = false;
    }

    if (message.trim() === '') {
      errors.message = 'Message is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };
    return(
    <>
    <div className='contact-banner'>
      <div className="container text-center">
			  <div className="row">
          <div className="col-lg-12">
            <h3 className='top-text'>Contact Us</h3>
          </div>
			  </div>
		  </div>
    </div>
    <div className='inner-contact'>
      <div className='container'>
        <div className='row'>
        <div className="col-md-6">
        <div className="contact-form-container">
            {submitted ? (
              <div className="response-message">
                <p>Thank you for your submission!</p>
                <p>We have received your message.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                  type="text"
                  id="name"
                  placeholder='Name'
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>
                  <div className="form-group">
                    <input
                    type="email"
                    id="email"
                    value={email}
                    placeholder='Email'
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                  <div className="form-group">
                    <input
                    type="text"
                    id="subject"
                    value={subject}
                    placeholder='subject'
                    required
                    onChange={(e) => setSubject(e.target.value)}
                    />
                    {errors.subject && <span className="error-message">{errors.subject}</span>}
                  </div>
                  <div className="form-group">
                      <textarea
                      id="message"
                      placeholder='Message'
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                      {errors.message && <span className="error-message">{errors.message}</span>}
                    </div>
                    <button type="submit">Submit</button>
                  </form>
                )}
              </div>
              </div>
                <div className='col-md-6'>
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
                </div>
          </div>
      </>
    )
}
export default Contact;