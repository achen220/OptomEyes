import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
export default function Dashboard () {
  const navigate = useNavigate();
  const navigateToVF = (e) => {
    e.preventDefault();
    console.log("navigating to visual field test")
    navigate("/visualfield");
  }
  return (
    <div>
      <h1 className='text-xl'>Welcome to your Dashboard</h1>
      <menu className='text-center flex flex-col'>
        <button className='px-10 py-5 mt-10 rounded-md bg-gray-200 duration-300 hover:bg-gray-400'
        onClick={navigateToVF}
        >
          Visual Field Test
        </button>
        <button className='px-10 py-5 mt-10 rounded-md bg-gray-200 duration-300 hover:bg-gray-400'>
          Can you see me?
        </button>
        <button className='px-10 py-5 mt-10 rounded-md bg-gray-200 duration-300 hover:bg-gray-400'>
          Color Vision Test
        </button>
        <button className='px-10 py-5 mt-10 rounded-md bg-gray-200 duration-300 hover:bg-gray-400'>
          Peanut Butter Jelly
        </button>
        <button className='px-10 py-5 mt-10 rounded-md bg-gray-200 duration-300 hover:bg-gray-400'>
          Filler Filler
        </button>
      </menu>
    </div>
  );
  // }
}
