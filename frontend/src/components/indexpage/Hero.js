import React from 'react'
import styling from './Hero.module.css'
import herobanner from '../../images/jewelry.png';
import { Link } from 'react-router-dom';

export default function hero() {
  return (
    <>

        <div className={styling.hero}>
            <img alt='jewels' src={herobanner}></img>

            <div className={styling.overlay}></div>

            <div className={styling.herocontent}>
            <h1>Jewelry by JOC</h1>
            <p>Handcrafted by Professionals</p>
            <Link to={"/products"} ><button>All Products</button></Link>
        </div>

        </div>





    </>
  )
}
