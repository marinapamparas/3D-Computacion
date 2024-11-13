import "./QuienesSomos.css";
import imgtecnico from '../../multimedia/tecnicoreparando.png';
import imgtecnicoresponsive from '../../multimedia/tecnicoentero.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const QuienesSomos = () => {

    

    return (
        <Container fluid className='containerQuienesSomos' id='QuienesSomos'>
            <Row className='row'>

                <Col md={6} lg={true} className='containertecnico order-lg-last'>
                    
                    <img src={imgtecnicoresponsive} alt="Mano de tecnico reparando computadora" className='imgtecnicoresponsive' />
                    <img src={imgtecnico} alt="Mano de tecnico reparando computadora" className='imgtecnico' />
                    
                </Col>

                <Col md={6} lg={true} className='containerp'>
                    <h2 className='fonth2'>¿Quiénes somos?</h2>
                    <p className='fontp'> Durante 20 años nos hemos dedicado apasionadamente al servicio de reparación y mantenimiento de computadoras en Las Heras, Mendoza. Nuestro éxito se basa en la <strong>cercanía</strong> que mantenemos con cada cliente. La <strong>confianza</strong> que depositan en nosotros es la base de nuestro <strong>compromiso</strong> diario para brindar soluciones tecnológicas que perduren en el tiempo. </p>
                    <br />
                    <p className='fontp'>La <strong>calidad</strong> se refleja en cada detalle de nuestro trabajo y queremos asegurarnos que el servicio y los productos que ofrecemos a nuestros clientes sean excepcionales. </p>
                </Col>
  
            </Row>
        </Container>
    );
}

export default QuienesSomos;