import React from 'react';

export default function Home () {
  return (
  <><div className='flex flex-row justify-center mt-10'>
      <img src="https://www.georgiaencyclopedia.org/wp-content/uploads/2021/02/modern-optometry_001-1024x666.jpg"
        alt="" className='w-2/4' />
      <div className='flex flex-col justify-center ml-20 p-5 font-sans text-center border-l border-r border-black'>
        <p>
          <span className='text-2xl font-bold '> Hello, we are Optomize </span>
          <br/><br/>
          <span className='ml-5 text-xl'> Something something something </span>
          <br/><br/>
          <span className='ml-5 text-xl'> Leading company in online Eye Tech </span>
          <br/><br/>
          <span className='ml-5 text-xl'> Something something something </span>
          <br/><br/>
          <span className='ml-5 text-xl'> Leading company in online Eye Tech </span>
          <br/><br/>
          <span className='ml-5 text-xl'> Something Jackson tricked me into tailwind Tech </span>
          <br/><br/>
          <span className='ml-5 text-xl'> Leading company in online Eye Tech </span>
        </p>
      </div>
    </div>
    <footer className='flex flex-row justify-evenly fixed bottom-0 left-0 right-0 h-[100px] bg-green-600 text-white p-5'>
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