import './App.css'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import NavBar from './components/Navbar/Navbar'


function App() {
  
  return (
    <div>

      <BrowserRouter>
        
        <NavBar/>
       
        <Routes>

          <Route path='*' element= {<Navigate to='/'/>} />

        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
