import React from "react";
import imgHerramientas from "../../../src/multimedia/herramientas.svg";
import imgImpresora from "../../../src/multimedia/impresora.svg";
import imgPc from "../../../src/multimedia/pc.svg";
import imgCelular from "../../../src/multimedia/celular.svg";

import "./servicios.css";

const Servicios = () => {
  return (
    <div id="Servicios">
      <div className="container-services">
        <div className="title-services">
          <h1>Servicios</h1>
        </div>
        <div className="container-info-services">
          <div className="container-info">
            <img src={imgHerramientas} />
            <p>Reparación y mantenimiento de equipos de computación</p>
          </div>
          <div className="container-info">
            <img src={imgImpresora} />
            <p>Impresiones, scanner y fotocopias</p>
          </div>
          <div className="container-info">
            <img src={imgPc} />
            <p>Soporte técnico (hardware)</p>
          </div>
          <div className="container-info">
            <img src={imgCelular} />
            <p>Reparación de celulares</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
