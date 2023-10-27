import React, { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="logo">We chat</span>
      <div className="userChat">
        <img src={currentUser.photoURL} alt='Profile image'/>
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
