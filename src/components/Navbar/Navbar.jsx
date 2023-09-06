import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavLink from 'react-bootstrap/esm/NavLink';
import logo from '../../assets/logo.png';
import './Navbar.css'

const NavBar = () => {
  return (
    <Navbar expand="lg" className='navbar nav-border-bottom'>
        
      <Container className='navbarcontainer'>
        <div className='logocontainer'>
          <Navbar.Brand href="#home"><img src={logo} alt="logo 3D-computacion" className='logoimg' /></Navbar.Brand>
        </div>   
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navbarlinks">
              <NavLink to={`/QuienesSomos`} className={({isActive}) => isActive ? 'NavActiva' : 'NavPasiva'}>Quiénes somos</NavLink>
              <NavLink to={`/Servicios`} className={({isActive}) => isActive ? 'NavActiva' : 'NavPasiva'}>Servicios</NavLink>
              <NavLink to={`/Productos`} className={({isActive}) => isActive ? 'NavActiva' : 'NavPasiva'}>Productos</NavLink>
              <NavLink to={`/Contactanos`} className={({isActive}) => isActive ? 'NavActiva' : 'NavPasiva'}>Contactanos</NavLink>
                            
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;