import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login.jsx'
export default function Navbar () {
  return (
    <nav>
    <ul className='inline-flex text-center p-6'>
      <Link className='px-2' to='/'>Home</Link>
      <Link className='px-2' to='/login'>Login</Link>
      <Link className='px-2' to='/signup'>Signup</Link>
    </ul>
    </nav>
  )
}

