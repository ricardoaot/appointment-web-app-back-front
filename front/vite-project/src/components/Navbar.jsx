import { Link } from "react-router-dom"
import LoginButton from "./LoginButton"
import styles from "./Navbar.module.css"
console.log(styles)
function Navbar() { 
    return (   
        <>
            <nav className={styles.navbarStyle} >
                <div>
                    <h1 className={styles.navbarTitle} >Navbar</h1>
                </div>
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/appointments">Appointments</Link>                
                </div>
            </nav>
        </>
    )
}

export default Navbar
