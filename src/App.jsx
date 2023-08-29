import './App.css'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'


function App() {
  
  return (
    <div>

      <BrowserRouter>

        <Routes>

          <Route path='*' element= {<Navigate to='/'/>} />

        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
