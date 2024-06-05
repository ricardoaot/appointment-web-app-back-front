import { Link, useNavigate } from "react-router-dom"
import LoginButton from "./LoginButton"
import styles from "./Navbar.module.css"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../redux/userSlice";
import swal from 'sweetalert2';

function Navbar() { 
    const user = useSelector((state) => state.userState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault(); // Evita la navegación predeterminada
        dispatch(logout()); // Despacha la acción de logout
        swal.fire({
            icon: 'success',
            title: 'Logged Out',
            timer: 2000
        }).then(() => {
            navigate("/"); // Redirige a la página de inicio de sesión
        });
    };

    return (   
        <>
            <nav className={styles.navbarStyle} >
                <div>
                    <h1 className={styles.navbarTitle}>Navbar</h1>
                </div>
                <div>

                    {user.login ? (<>
                        <span className={styles.navbarTitle}>Bienvenido {user.user.name}</span>
                        <Link to="/appointments">Appointments</Link>                
                        <Link onClick={handleLogout} >Logout</Link>
                    </>):(<>
                        <Link to="/login">Login</Link>
                        <Link to="/register">User Register</Link>                    
                    </>)}

                </div>
            </nav>
        </>
    )
}

export default Navbar
