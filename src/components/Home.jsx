import React from 'react';

export default function Home () {
  return (
    <div className='flex flex-row'>
      <img src="https://uwaterloo.ca/optometry-vision-science/sites/ca.optometry-vision-science/files/resize/styles/body-500px-wide/public/uploads/images/glaucoma_banner_image-400x288.png?itok=eWorLaJS" 
      alt="" className='w-auto mr-10'/>
      <div className='w-auto h-auto m-auto'>
        <p className='font-serif'>
          <span className='text-5xl'> Welcome to Optomize, </span> <br/>
          <span className='ml-10 text-2xl'>the leading online Eyecare app</span> <br/>
          <span className='ml-15 text-2xl'> Founded by the guy who ran away from Optometry school</span> <br/>
          <span className='ml-10 text-2xl'> Yours truly</span> <br />
          <span className='text-5xl'>Aaron Chen</span>
        </p>
      </div>
    </div>
  )
}