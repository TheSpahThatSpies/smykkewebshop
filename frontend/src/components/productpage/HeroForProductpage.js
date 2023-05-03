import React from 'react'
import styling from '../productpage/HeroForProductpage.module.css';
import banner from '../../images/je.jpeg';

export default function HeroForProductpage(props) {
  return (
    <>

        <div className={styling.hero}>
            <img alt='jewels' src={banner}></img>

            <div className={styling.overlay}></div>
            <div className={styling.herocontent}>
                <h1>{props.category ? ` ${props.category.toUpperCase()}` : ''} by JOC</h1>
                <p>Handcrafted by professionals</p>
                <button>Products</button>
            </div>
        </div>  

    </>
  )
}
