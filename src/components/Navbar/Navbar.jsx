import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {HashLink as Link} from 'react-router-hash-link' ;
import { FaBars, FaTimes } from 'react-icons/fa'; 
import logo from '../../assets/logo.png';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {

  const [expanded, setExpanded] = useState(false); 

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };
  
  return (
    <Navbar expand="lg" className='navbar nav-border-bottom navbar-fixed'>
        
      <Container className='navbarcontainer'>
        <div className='logocontainer'>
          <Navbar.Brand href="#home"><img src={logo} alt="logo 3D-computacion" className='logoimg' /></Navbar.Brand>
        </div>   
        

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className='toggle-container'
          onClick={toggleNavbar}
        >
          <button className='buttonnavbar'>{expanded ? <FaTimes className='cruznavbar'/> : <FaBars />}</button>
          
        </Navbar.Toggle>
        
        
        <Navbar.Collapse id="basic-navbar-nav" >
            <div className='navbarcollapse'>
              <Nav className="me-auto navbarlinks">
                <Link className="titulosnavbar" to={`#QuienesSomos`}>Quiénes somos</Link>
                <Link className="titulosnavbar" to={`#Servicios`}>Servicios</Link>
                <Link className="titulosnavbar" to={`#Productos`}>Productos</Link>
                <Link  className="titulosnavbar" to={`#Contacto`}>Contactanos</Link>
                              
              </Nav>
            </div>
        </Navbar.Collapse>
        
      </Container>
        
        
    </Navbar>

  );
}

export default NavBar;