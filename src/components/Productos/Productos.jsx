import React from "react";
import "./productos.css";
import imgAuriculares from "../../multimedia/auriculares.png";
import imgCargador from "../../multimedia/cargador.png";
import imgFundas from "../../multimedia/fundas.png";
import imgComputadora from "../../multimedia/netbook.jpg";
import imgTeclado from "../../multimedia/teclado-rosa.jpg";

const Productos = () => {
  return (
    <div id="Productos">
      <div className="container-productos">
        <div className="info-productos">
          <h3 className="mobile-title">Productos</h3>
          <p>
            <span className="desktop-title">Productos </span> Conseguilos en
            nuestro local. Consultanos, tenemos variedad de opciones.
          </p>
        </div>
        <div className="cables" data-label="Computadoras">
          <img src={imgComputadora} className="imagenHover" />
        </div>
        <div className="mouse" data-label="Mouses y teclados">
          <img src={imgTeclado} className="imagenHover" />
        </div>
        <div className="auris" data-label="Auriculares">
          <img src={imgAuriculares} className="imagenHover" />
        </div>
        <div className="cargador" data-label="Cables USB">
          <img src={imgCargador} className="imagenHover" />
        </div>
        <div className="fundas" data-label="Fundas y protectores">
          <img src={imgFundas} className="imagenHover" />
        </div>
      </div>
    </div>
  );
};

export default Productos;
