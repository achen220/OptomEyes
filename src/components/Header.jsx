import React from 'react';
import Navbar from './Navbar.jsx'
export default function Header () {
  return (
    <header className='fixed top-0 right-0 left-0 
    border-b border-black ml-8 mr-8
    flex flex-row justify-between items-center
    z-50'>
      <div className='text-2xl font-bold font-serif
      p-6'>
        Optomeyes
      </div>
      <Navbar/>
    </header>
  )
}