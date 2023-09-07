import React from "react";
import "./contacto.css";
import imgContacto from "../../multimedia/contacto.png";
import iconUbicacion from "../../multimedia/ubicacios.svg";
import iconTelefono from "../../multimedia/telefono.svg";
import iconHora from "../../multimedia/horarios.svg";
import line from "../../multimedia/Rectangle.svg"

const Contacto = () => {
  return (
    <div>
      <div className="container-contacto">
        <div className="title-contacto">
          <h3>Contactanos</h3>
        </div>
        <div className="google-maps">
          <img src={imgContacto} />
        </div>
        <div className="datos-contacto">
          <div className="telefono">
            <p>Teléfono</p>
            <div className="container-icono-tel">
              <img src={iconTelefono} />
              <p>0261 334 - 1834</p>
            </div>
          </div>
          <img src={line} className="line-side"/>
          <div className="direccion">
            <p>Direccion</p>
            <div className="container-icono-ubi">
              <img src={iconUbicacion} />
              <div className="info-direccion">
                  <p>Doctor Moreno 1495</p>
                  <p>5539 Las Heras, Mendoza</p>
                  <p>Argentina</p>
              </div>
            </div>
          </div>
          <img src={line} className="line-side"/>

          <div className="horarios">
            <p>Horarios de atencion</p>
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
