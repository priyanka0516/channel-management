import React,{Component} from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Login from './Login';
export default class Header extends Component {
  constructor(props) {
    super(props);
     this.state = {
      show: false
    };
  
  }

  setNavExpanded = (expanded) => {
    this.setState({ navExpanded: expanded });
  }

  setNavClose = () => {
    this.setState({ navExpanded: false });
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  render() {
  const { isOpen } = this.state;
  return (
      <>
        <Navbar bg="white" variant="dark" expand="lg" sticky="top" onToggle={this.setNavExpanded} expanded={this.state.navExpanded}>
        <Container>
          <Navbar.Brand><img src={require('./assets/Crown-Logo.png')} alt="logo"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto" onClick={this.setNavClose}>
                <Link to="/" id="navbar-head" className='active'>Home</Link>
                <Link to="about" id="navbar-head">About Us</Link>
                <Link to="service"id="navbar-head">Services & Facilities</Link>
                <Link to="rooms"id="navbar-head">Rooms</Link>
                <Link to="dining" id="navbar-head">Dining</Link>
                <Link to="contact" id="navbar-head">Contact Us</Link>
                <Link id="navbar-head" to="/login"><button>Login/Signup</button></Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    );
  }
}

