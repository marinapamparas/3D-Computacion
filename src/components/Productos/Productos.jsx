import React from "react";
import "./productos.css";
import imgAuriculares from "../../multimedia/auriculares.png";
import imgCargador from "../../multimedia/cargador.png";
import imgFundas from "../../multimedia/fundas.png";
import imgCables from "../../multimedia/cables.png";
import imgMouse from "../../multimedia/mouse.png";

const Productos = () => {
  return (
    <div id="Productos">
      <div className="container-productos">
        <div className="info-productos">
          <h3 className="mobile-title">Productos</h3>
          <p>
            <span className="desktop-title">Productos </span> Consultanos, tenemos variedad de
            opciones.
          </p>
        </div>
        <div className="auris" data-label="Auriculares">
          <img src={imgAuriculares} className="imagenHover" />
        </div>
        <div className="cargador" data-label="Cargadores">
          <img src={imgCargador} className="imagenHover" />
        </div>
        <div className="fundas" data-label="Fundas y protectores">
          <img src={imgFundas} className="imagenHover" />
        </div>
        <div className="cables" data-label="Cables USB y auxiliares">
          <img src={imgCables} className="imagenHover" />
        </div>
        <div className="mouse" data-label="Mouses y teclados">
          <img src={imgMouse} className="imagenHover" />
        </div>
      </div>
    </div>
  );
};

export default Productos;