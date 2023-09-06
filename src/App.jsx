import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Servicios from "./components/Servicios/Servicios";
import QuienesSomos from "./components/QuienesSomos/QuienesSomos";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";

function App() {
  return (
    <div>
      <BrowserRouter>
        
        <NavBar />
        <QuienesSomos/>
        <Servicios />
        <WhatsAppButton />        
      </BrowserRouter>
    </div>
  );
}

export default App;
