import React from 'react'
import herobanner from '../../images/jewelry.png';

export default function hero() {
  return (
    <>
        <div className='w-full h-96'>
            <img className='object-cover h-2/3 w-full' alt='jewels' src={herobanner}></img>
        </div>
    </>
  )
}
