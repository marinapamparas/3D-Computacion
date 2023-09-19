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
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
    setMenuOpen(!menuOpen);
  };
  
  return (
    <Navbar expand="lg" className='navbar nav-border-bottom navbar-fixed'>
        
      <Container className='navbarcontainer'>
        <div className='logocontainer'>
          <Navbar.Brand href="/"><img src={logo} alt="logo 3D-computacion" className='logoimg' /></Navbar.Brand>
        </div>   
        

        <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggle-container' onClick={toggleNavbar}>
        
        <a className='buttonnavbar'>{menuOpen ? <FaTimes className='cruznavbar'/> : <FaBars />}</a>
          
        </Navbar.Toggle>
        
        
        <Navbar.Collapse id="basic-navbar-nav" style={{ display: menuOpen ? 'block' : 'none' }}>
            <div className='navbarcollapse'>
              <Nav className="me-auto navbarlinks">
                <Link className="titulosnavbar" to={`#QuienesSomos`} onClick={() => setMenuOpen(false)}>Quiénes somos</Link>
                <Link className="titulosnavbar retoque" to={`#Servicios`} onClick={() => setMenuOpen(false)}>Servicios</Link>
                <Link className="titulosnavbar" to={`#Productos`} onClick={() => setMenuOpen(false)}>Productos</Link>
                <Link  className="titulosnavbar" to={`#Contacto`} onClick={() => setMenuOpen(false)}>Contactanos</Link>
                              
              </Nav>
            </div>
        </Navbar.Collapse>
        
      </Container>
        
        
    </Navbar>

  );
}

export default NavBar;