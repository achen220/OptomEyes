import React from 'react';

export default function Flash({xPosition, yPosition}) {
  return (
    <div className={`flex absolute top-[${yPosition}px] left-[${xPosition}px] translate-y-1/2 translate-x-1/2 w-[10px] h-[10px] bg-black`}>
    </div>
  )
}