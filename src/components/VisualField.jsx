import React, { useEffect, useState } from 'react';
import Flash from './Flash.jsx'

export default function VisualField () {
  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);
  const [change, setChange] = useState(false)
  const [style, setStyle] = useState({});
  const [count, setCount] = useState(0)
  const [theFlash, setTheFlash] = useState(<div className={`absolute w-[10px] h-[10px] bg-black`}></div>)

  const generateNum = () => {
    return Math.floor(Math.random() * 8) * 100;
  }

  useEffect(() => {
    setCount(count + 1)
    setXPosition(generateNum());
    setYPosition(generateNum());
    setStyle({top: `${yPosition}px`, left: `${xPosition}px`})
    setTheFlash(<div style={style} className={`absolute w-[10px] h-[10px] bg-black`}> </div>)
    if (count > 15) {
      return;
    } else {
      setTimeout(() => {
        setChange(!change)
      },3000)
    }
  },[change])

  return (
    <div className='text-center'>
      <button onClick={() => {
        setChange(!change)
      }}>Start Test</button>
      <p>points: {count}</p>
      <div id='board' className='relative w-[710px] h-[710px] border border-black bg-white'>
        <div id='center' className='flex absolute top-1/2 left-1/2 translate-y-1/2 translate-x-1/2
        w-[10px] h-[10px] bg-black'>
        </div>
        {theFlash}
      </div>
    </div>
  )
}

{/* <div className={`flex relative top-[${yPosition}px] left-[${xPosition}px] translate-y-1/2 translate-x-1/2 w-[10px] h-[10px] bg-black`}></div> */}