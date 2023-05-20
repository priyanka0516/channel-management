import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import { Card, CardGroup, Container ,Row, Col} from 'react-bootstrap';
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
const Rooms = () => {
    const rooms = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay:true,
        slidesToScroll: 1
    };
    const repeatCount = 7; // Number of times to repeat the card
const cardData = [
  { id: 1,heading: 'Superior suites', text: 'Superior suites typically feature a spacious ensuite bathroom equipped with a variety of upscale amenities. These may include a separate bathtub and shower, premium toiletries, bathrobes, slippers, and a hairdryer.' },
  { id: 2, heading: 'Standard Twin Bedroom', text: '29 m2 with private space and two beds of 120 cm wide with street view and standard amenities.' },
  { id: 3, heading: 'Standard King Room', text: '26 m2, Front Street view, With King bed , private bathroom and standard amenities.' },
  { id: 4, heading: 'Junior Suite', text: '42 m2 , One bedroom and living room with kitchen facility.' },
    { id: 5, heading: 'Executive Suite', text: '51 m2 One bedroom and living room with sofa bed and sitting area , kitchenette furnished with cooking facility.' },
  { id: 6, heading: 'Diplomat Suite', text: '42 m2 , One bedroom and living room with kitchen facility.' },
  { id: 7, heading: 'Handicapped Suite', text: '51 m2 One bedroom and living room with sofa bed and sitting area , kitchenette furnished with cooking facility.' },
];
    return (
        <>
           <div className='room-banner'>
            <div className="container text-center">
			<div className="row">
				<div className="col-lg-12">
                <h3 className='top-text'>Rooms</h3>
				</div>
			</div>
		    </div>
        </div>
        <div className="rooms-area">
            <Container>
                <Row>
                    <Col md={12}>
                    {cardData.map((card) => (
                    <div className="card"  key={card.id}>                     
                    <Row>
                    <Col md={4}>
                        <div className="left-side-room">
                            <Slider {...rooms}>
                                <img src={require('./assets/superior1.jpeg')} alt="superior1" id="room-suite" />
                                <img src={require('./assets/superior2.jpeg')} alt="superior2" id="room-suite" />
                                <img src={require('./assets/superior3.jpeg')} alt="superior3"id="room-suite" />
                            </Slider>
                        </div>               
                    </Col>
                    <Col md={8}>
                        <div className="middle-side-room">
                            <h3>{card.heading}</h3>
                            <p>{card.text}</p>
                            <div className="d">
                            <div className="left-text">
                            <ul className="items">
                                <li><img src={require('./assets/television.png')} alt="television" /></li>
                                <li><img src={require('./assets/shower.png')} alt="shower"/></li>
                                <li><img src={require('./assets/restaurant.png')} alt="restaurant" /></li>
                                <li><img src={require('./assets/telephone.png')} alt="telephone" /></li>
                                <li><img src={require('./assets/wine.png')} alt="wine" /></li>
                                <li><img src={require('./assets/microwave.png')} alt="microwave"/></li>
                            </ul>
                            </div>
                            <div className="right-text"><Link to="/bookroom"><button className="service-button">Book Now</button></Link></div>
                        </div>
                        </div>
                    </Col>
            </Row> 
            </div>
            ))}
            </Col>
            </Row>
            </Container>
        </div>
        </>
    )
}
export default Rooms;