import imgtecnico from '../../multimedia/tecnicoreparando.png';
import "./QuienesSomos.css"


const QuienesSomos = () => {
    return (
        <div className='containerQuienesSomos' id='QuienesSomos'>
            <div className='containerp'>
                <h2 className='fonth2'>¿Quiénes somos?</h2>
                <p className='fontp'> Durante 20 años nos hemos dedicado apasionadamente al servicio de reparación y mantenimiento de computadoras en Las Heras, Mendoza. Nuestro éxito se basa en la cercanía que mantenemos con cada cliente. La confianza que depositan en nosotros es la base de nuestro compromiso diario para brindar soluciones tecnológicas que perduren en el tiempo. </p>
                <br />
                <p className='fontp'>La calidad se refleja en cada detalle de nuestro trabajo y queremos asegurarnos que el servicio y los productos que ofrecemos a nuestros clientes sean excepcionales. </p>
            </div>
            <div className='containertecnico'>
                <img src={imgtecnico} alt="Mano reparando computadora" className='imgtecnico'/>
            </div>
        </div>
    );
}

export default QuienesSomos;