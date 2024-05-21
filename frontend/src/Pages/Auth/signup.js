import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import './signup.css';
const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://backend-url/signup', {
        username,
        password,
        phoneNumber,
        email
      });
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container'>
      <div className='wrapper'>
        <FontAwesomeIcon icon={faUser} size="3x" color="black" />
      <h2 style={{
        textAlign: 'center',
      fontSize: '30px',
      color: 'black',
      fontFamily: 'cursive',
      marginTop: '0.5rem',
      bacgroundColor: '#ecddd5',
      }}>Sign Up</h2>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <FontAwesomeIcon icon={faUser} size="1x" color="black" />
      <input className='input'
      
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      </div>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <FontAwesomeIcon icon={faLock} size="1x" color="black" />
      <input className='input'
       
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <FontAwesomeIcon icon={faPhone} size="1x" color="black" />
      <input className='input'
        
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      </div>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <FontAwesomeIcon icon={faEnvelope} size="1x" color="black" />
      <input className='input'
        
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
      <button onClick={handleSignup} className='button'>Sign Up</button>
      </div>
      </div>
    </div>
  );
};

export default Signup;

