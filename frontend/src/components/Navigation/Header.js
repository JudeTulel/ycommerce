import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../assets/logo.png';
import Navbar from './Navbar';


import NavBarButtons from './NavBarButtons';

const Header = () => {
  return (
    <header style={styles.header}>
      <Link to="/">
        <img src={logo} alt="Company Logo" style={styles.logo} />
      </Link>
      <div style={styles.nav}>
      <Navbar />
      
      </div>
      <div style={styles.SearchBar}>
        <NavBarButtons/>
      </div>
      
      
    </header>
  );
};

export default Header;

const styles = {
  logo: {
    width: 75,
    height: 'auto',
    marginLeft: 20, // Add margin for better spacing
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between', // Add space between logo and navigation
    borderBottom: '2px solid #ccc',
    backgroundColor: '#ecddd5',
    padding: 0, // Add padding for better spacing
  },
    nav: {
        marginLeft: 20, // Add margin for better spacing
        alignSelf:'center',
        
    },
    SearchBar: {
      alignSelf:'center',
      marginRight: 20,
    }
};