import React from "react";
import "./productos.css";
import imgAuriculares from "../../multimedia/auriculares.png";
import imgCargador from "../../multimedia/cargador.png";
import imgFundas from "../../multimedia/fundas.png";
import imgCables from "../../multimedia/cables.png";
import imgMouse from "../../multimedia/mouse.png";

const Productos = () => {
  return (
    <div>
      <div className="container-productos">
        <div className="info-productos">
            <p><span>Productos </span> Conseguilos en nuestra tienda o por Marketplace. Consultanos; tenemos variedad de opciones.</p>
        </div>
          <div className="auris">
            <img src={imgAuriculares} className="imagenHover"/>
          </div>
          <div className="cargador">
          <img src={imgCargador} className="imagenHover"/>
          </div>
          <div className="fundas">
            <img src={imgFundas} className="imagenHover"/>
          </div>
          <div className="cables">
            <img src={imgCables} className="imagenHover"/>
          </div>
          <div className="mouse">
            <img src={imgMouse} className="imagenHover"/>
          </div>
      </div>
    </div>
  );
};

export default Productos;
