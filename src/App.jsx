import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Servicios from "./components/Servicios/Servicios";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Servicios />
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
