import LoginButton from "./LoginButton"
import styles from "./Navbar.module.css"
console.log(styles)
function Navbar() { 
    return (   
        <>
            <nav className={styles.navbarStyle} >
                <h1 className={styles.navbarTitle} >Navbar</h1>
                <h2 id="navbarTitleId">texto 2</h2>
                <LoginButton />
            </nav>
        </>
    )
}

export default Navbar
