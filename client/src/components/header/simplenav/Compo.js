import React ,{Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from  "react-bootstrap/Button";
import NavDropdown from  "react-bootstrap/NavDropdown";
import './style.css'

 class Header extends Component{

    render(){

        return(
<Fragment>
<Navbar className="head" collapseOnSelect expand="lg" variant="dark">
  <Navbar.Brand href="#home" className="logo">Greenorchard</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className="harami">
    <Nav className="mr-auto ">
      <Nav><a href="/home" className="lund">Home</a></Nav>
      <Nav> <a href="#" className="lund">Service</a></Nav> 
      <Nav><a href="#" className="lund">Deals</a></Nav>
      <Nav> <a href="/form" className="lund">Login</a></Nav> 
    </Nav>
    
  </Navbar.Collapse>
</Navbar>

  </Fragment>     
        );
    }
 }

 export default Header;