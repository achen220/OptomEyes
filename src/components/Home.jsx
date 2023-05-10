import React from 'react';
import Signup from './Signup.jsx'

export default function Home () {
  return (
  <><div className='flex flex-row justify-center mt-10'>
      <img src="https://www.georgiaencyclopedia.org/wp-content/uploads/2021/02/modern-optometry_001-1024x666.jpg"
        alt="" className='w-1/2' />
      <Signup/>
    </div>
    <footer className='flex flex-row mt-auto justify-evenly fixed bottom-0 left-0 right-0 h-[100px] bg-green-600 text-white p-5'>
      <ul className='text-center'>
        <li className='text-lg mb-1'>ABOUT</li>
        <li className='inline-flex m-3'>Our History</li>
        <li className='inline-flex m-3'>FAQ</li>
        <li className='inline-flex m-3'>Jobs</li>
      </ul>
      <ul className='text-center'>
        <li className='text-lg mb-1'> BUSINESS ENTITIES</li>
        <li className='inline-flex m-3'>U.S/Europe</li>
        <li className='inline-flex m-3'>China</li>
        <li className='inline-flex m-3'>India</li>
      </ul>
    </footer>
  </>
  )
}