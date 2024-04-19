"use client";
import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

export default function MyComponent() {
  const [grade, setGrade] = useState(0);

 
  const handleGrade = (rate: number) => {
    setGrade(rate);
  };


  const onPointerEnter = () => console.log('Enter');
  const onPointerLeave = () => console.log('Leave');
  const onPointerMove = (value: number, index: number) => console.log(value, index);

  return (
    <div className='rating_design'>
      <Rating
        onClick={handleGrade}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
     
      />
    </div>
  );
}
