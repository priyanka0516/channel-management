import React from 'react';
const About = () => {
    return (
        <>
        <div className='contact-banner'>
            <div className="container text-center">
			  <div className="row">
				<div className="col-lg-12">
          <h3 className='top-text'>About Us</h3>
				</div>
			  </div>
		    </div>
        </div>
        <section className="about-section">
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
        </section>
        </>
    )
}
export default About;