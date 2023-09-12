import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Servicios from "./components/Servicios/Servicios";
import QuienesSomos from "./components/QuienesSomos/QuienesSomos";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import Productos from "./components/Productos/Productos";
import Contacto from "./components/Contacto/Contacto";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        
        <NavBar />
        <QuienesSomos/>
        <Servicios />
        <Productos/>
        <Contacto/>
        <WhatsAppButton />        
      </BrowserRouter>
    </div>
  );
}

export default App;
