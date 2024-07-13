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
                <div className="grid w-full grid-cols-4 py-3">
                    <div className="flex justify-start items-center ml-8 px-4 gap-4  col-span-2">
                        <h1 className={styles.navbarTitle}>Appointment App</h1>
                        
                        <Link to="/" >
                            Home
                        </Link>

                        {user.login ? (<>
                            <Link to="/appointments">My Appointments</Link>   
                        </>):(<>
                                             
                        </>)}

                    </div>
                    <div className="flex justify-end items-center gap-4 mr-8 px-4 col-span-2">

                        {user.login ? (<>
                            <span className="text-gray-50">Welcome back <b>{user.user.name}</b></span>

                            <Link onClick={handleLogout} >Logout</Link>
                        </>):(<>
                            <Link to="/login">Sign In</Link>
                            <Link to="/register">Sign Up</Link>                    
                        </>)}

                    </div>
                </div>
                
            </nav>
        </>
    )
}

export default Navbar
