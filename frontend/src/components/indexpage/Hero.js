import React from 'react'
import styling from './Hero.module.css'
import { Link } from 'react-router-dom';

export default function hero() {
  return (
    <>

        <div className={styling.hero}>
            <img alt='jewels' src='https://cdn.discordapp.com/attachments/1046732555325538349/1100126331179634851/jewelry.png'></img>

            <div className={styling.overlay}></div>

        </div>



        <div className={styling.herocontent}>
            <h1>Jewelry by JOC</h1>
            <p>handcrafted by professionals</p>
            <Link to={"/productpage"}>
            <button>Products</button>
            </Link>
        </div>

    </>
  )
}
