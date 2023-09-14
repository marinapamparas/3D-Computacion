import React from "react";
import "./contacto.css";
import imgContacto from "../../multimedia/contacto.png";
import iconUbicacion from "../../multimedia/ubicacios.svg";
import iconTelefono from "../../multimedia/telefono.svg";
import iconHora from "../../multimedia/horarios.svg";
import line from "../../multimedia/Rectangle.svg";

const Contacto = () => {
  return (
    <div id='Contacto'>
      <div className="container-contacto">
        <div className="title-contacto">
          <h3>Contactanos</h3>
        </div>
        <div className="google-maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.7821468929037!2d-68.84250792353019!3d-32.851019367066634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0897255425fb%3A0xa230da7138a383d0!2sDr.%20Moreno%201495%2C%20M5539%20Las%20Heras%2C%20Mendoza!5e0!3m2!1ses-419!2sar!4v1694462925339!5m2!1ses-419!2sar"
            width="100"
            height="450"
            style={{ border: "0" }}
            loading="lazy"
          ></iframe>
        </div>
        <div className="titles">
          <h1>Telefono</h1>
          <h1>Ubicacion</h1>
          <h1>Horarios de atencion</h1>
        </div>
        <div className="datos-contacto">
          <div className="telefono">
            <div className="container-icono-tel">
              <img src={iconTelefono} />
              <p>0261 334 - 1834</p>
            </div>
          </div>
          <div className="barra"></div>
          <div className="direccion">
            <div className="container-icono-ubi">
              <img src={iconUbicacion} />
              <div className="info-direccion">
                <p>Doctor Moreno 1495</p>
                <p>5539 Las Heras, Mendoza</p>
                <p>Argentina</p>
              </div>
            </div>
          </div>
          <div className="barra2"></div>
          <div className="horarios">
            <div className="container-icono-horario">
              <img src={iconHora} />
              <div className="info-horarios">
                <p>Lunes a Viernes: 9:00 hs a 13:00 hs, 17:30 hs a 20:30 hs</p>
                <p>Sábado: 9:00 a 13:30 hs</p>
                <p>Domingo: Cerrado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
