import './App.css'
import Appointments from './views/Appointments.jsx'
import Home from './views/Home.jsx'
import Register from './views/Register.jsx'
import Login from './views/Login.jsx'
function App() {

  return (
    <>
      <div>
        {/* <Register /> */}
        <Login />
        <Appointments />
      </div>
    </>
  )
}

export default App
