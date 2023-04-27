import React from 'react'
import styling from './Hero.module.css'
import herobanner from '../../images/jewelry.png';

export default function hero() {
  return (
    <>

        <div className={styling.hero}>
            <img alt='jewels' src={herobanner}></img>

            <div className={styling.overlay}></div>

        </div>



        <div className={styling.herocontent}>
            <h1>Jewelry by JOC</h1>
            <p>handcrafted by professionals</p>
            <button>Products</button>
        </div>

    </>
  )
}
