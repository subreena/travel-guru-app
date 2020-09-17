import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';
import logo from '../../images/Logo.png';
import '../NavBar/NavBar.css';


const NavBar = () => {
  const [loggedInUser] = useContext(UserContext);
    return (
        <Navbar bg="light" expand="lg">
 <div className="container">
 <Navbar.Brand href="/">
    <img src={logo} alt="" style={{height: '50px'}} />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/destination">Destination</Nav.Link>
      <Nav.Link href="/blog">Blog</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
      <Nav.Link href="/login">
        <span className="nav-btn"> Log In</span>
      </Nav.Link>
     <img src={loggedInUser.photo} alt={loggedInUser.name} style={{height:"45px" , borderRadius: "100%"}}/>
    </Nav>
   
  </Navbar.Collapse>
 </div>
</Navbar>
    );
};

export default NavBar;