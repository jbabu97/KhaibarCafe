import React from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css';
import CartIcon from '../../icons/shopping-cart 1.png';
import Logo from '../../icons/khaibarCafe_2.png';

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <h2><Link to="/breakfast"><img src={Logo} alt=""/></Link></h2>
        <Form inline>
          <Link to="/cart"><Button className="btn curt_btn"><img className="cart_icon" src={CartIcon} alt=""/> My Cart</Button></Link>
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-5">
            <Link className="nav_link" to="/breakfast">Breakfast</Link>
            <Link className="nav_link" to="/lunch">Lunch</Link>
            <Link className="nav_link" to="/dinner">Dinner</Link>
            <Link className="nav_link" to="/admin">Admin</Link>            
          </Nav>
          <Form inline>
            <Link to="/login"><Button variant="outline-success">Login</Button></Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
