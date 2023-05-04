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
            <p>Handcrafted by professionals</p>
            <ul class="flex p-4 md:p-0 md:mt-6 font-thin rounded-lg justify-evenly md:justify-normal  flex-row md:space-x-8 ">
      
              <li>
                <Link to={"/products/rings"} className="block py-2 pl-3 pr-4 text-white rounded md:p-0 navlink">Rings</Link>
              </li>
              <li>
                <Link to={"/products/necklaces"} className="block py-2 pl-3 pr-4 text-white rounded md:p-0 navlink">Necklaces</Link>
              </li>
              <li>
                <Link to={"/products/bracelets"} className="block py-2 pl-3 pr-4 text-white rounded md:p-0 navlink">Bracelets</Link>
              </li>
              <li>
                <Link to={"/products/earrings"} className="block py-2 pl-3 pr-4 text-white rounded md:p-0 navlink">Earrings</Link>
              </li>
            </ul>
        </div>

        </div>





    </>
  )
}
