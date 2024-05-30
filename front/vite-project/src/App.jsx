//import './App.css'
import Appointments from './views/Appointments.jsx'
import Home from './views/Home.jsx'
import Register from './views/Register.jsx'
import Login from './views/Login.jsx'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'

function App() {

  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/register" element={<Register />} />  
          <Route path="/login" element={<Login />} />  
          <Route path="/appointments" element={<Appointments />} />  
        </Routes>
      </div>
    </>
  )
}

export default App
