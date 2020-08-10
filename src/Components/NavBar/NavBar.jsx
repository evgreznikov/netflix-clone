import React, {useEffect, useState} from "react";
import styles from "./NavBar.module.css"

const NavBar = () => {

    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", function () {
            if(window.scrollY > 100){
                handleShow(true)
            } else handleShow(false)
        })

        return () => {
            window.removeEventListener("scroll")
        }
    }, [])

    return <div className={`${styles.nav} ${show && styles.navBlack}`}>
        <img className={styles.netflix}
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="logo"/>
        <img className={styles.user}
            src="https://ailabs.kz/olymp/chat-widget/img/avatar0.png" alt="user"/>
    </div>
}

export default NavBar
