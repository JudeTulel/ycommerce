import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const NavBarButtons = () => {
  return (
    <div>
        <div style={styles.container}>
        <NavLink to="/signup" style={styles.nav}>
            <FontAwesomeIcon icon={faUser} color='orange' />
            Login
        </NavLink>
        <NavLink  to="/Cart" style={styles.nav}>
            <FontAwesomeIcon icon={faShoppingCart} color='orange' />Cart
        </NavLink>
      </div>
    </div>
  )
}

export default NavBarButtons
const styles = {
    nav: {
        padding: 10,
        marginLeft: 10,
        color: '#333',
        textDecoration: 'none', // Remove underline from links
        // Make the text bold
        fontSize: 20, // Larger font size
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
}