import React from 'react';
import logo from '../img/logos.png'
import { Navbar, Nav, } from 'react-bootstrap';
import headimg from '../img/headimg.png';
import Content from '../Ftr/content'

import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom'
const Navigation = () => {

  // make fixed and change navigation color on scroll
  window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav"); //ini new variable and use the nav selectio
    nav.classList.toggle("sticky", window.scrollY > 0); //add sticky call inside nav tag 

  })
  return (   
    <div className="navbar_body">
      <Router> 
      <Navbar collapseOnSelect expand="lg"  className="navcolor"   id="subnanvar">
        <div className="container">
        <Navbar.Brand href="#home"><img src={logo} className="logo " alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="ml-auto" id="responsive-navbar-nav">
          <Nav className="mr-auto menuitem">
            <Nav.Link href="#hm"    id ="home">Home</Nav.Link>
            <Nav.Link href="#srcv"  id ="home" >Service</Nav.Link>
            <Nav.Link href="#skl"   id ="home" >Skill</Nav.Link>
            <Nav.Link href="#abt"   id ="home" >About Me</Nav.Link>
                <Nav.Link href="#cntc" id="home" >Contact</Nav.Link>
               
          </Nav>
          </Navbar.Collapse>
          </div>
      </Navbar>

      
      </Router>
    </div>
  )
}
export default Navigation;