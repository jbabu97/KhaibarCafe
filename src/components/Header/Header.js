import React from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <h2><Link to="/breakfast">Khaibar Cafe</Link></h2>
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
