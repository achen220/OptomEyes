import React, { useEffect, useState } from 'react';
import Flash from './Flash.jsx'

export default function VisualField () {
  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);
  const [change, setChange] = useState(null)
  const [style, setStyle] = useState({});
  const [count, setCount] = useState(0)
  const [theFlash, setTheFlash] = useState(<div className={`absolute w-[10px] h-[10px] bg-black`}></div>)
  const [testData, setTestData] = [];
  // const [graphInfo, setGraphInfo] = useState({

  // })
  const generateNum = () => {
    return Math.floor(Math.random() * 4) * 200;
  }
  // let runTest = [
  //   [0,0],[0,200],[0,400],[0,600],
  //   [200,0],[200,200],[200,400],[200,600],
  //   [400,0],[400,200],[400,400],[400,600],
  //   [600,0],[600,200],[600,400],[600,600],
  //   ]

  useEffect(() => {
    if (change !== null) {
      setXPosition(generateNum());
      setYPosition(generateNum());
      setStyle({top: `${yPosition}px`, left: `${xPosition}px`})
      setTheFlash(<div style={style} className={`absolute w-[10px] h-[10px] bg-black`}> </div>)
      if (count > 50) {
        setCount(0)
        return;
      } else {
        setCount(count + 1);
        setTimeout(() => {
          setChange(!change)
        },1000)
      }

    }
  },[change])

  return (
    <div className='text-center'>
      <button onClick={() => {
        setChange(!change)
      }}>Start Test</button>
      <p>points: {testData}</p>
      <div id='board' className='relative w-[610px] h-[610px] border border-black bg-white'>
        <div id='center' className='flex absolute top-1/2 left-1/2 translate-y-1/2 translate-x-1/2
        w-[10px] h-[10px] bg-black'>
        </div>
        {theFlash}
      </div>
    </div>
  )
}

{/* <div className={`flex relative top-[${yPosition}px] left-[${xPosition}px] translate-y-1/2 translate-x-1/2 w-[10px] h-[10px] bg-black`}></div> */}