import React from 'react'
import styling from '../productpage/HeroForProductpage.module.css';
import banner1 from '../../images/rings.jpg';
import banner2 from '../../images/necklaces.jpg';
import banner3 from '../../images/bracelets.png';
import banner4 from '../../images/earrings.jpg';
import banner5 from '../../images/jewelry.png';

export default function HeroForProductpage(props) {

  let banner = banner5;
  if (props.category === 'rings') {
    banner = banner1;
  } else if (props.category === 'necklaces') {
    banner = banner2;
  } else if (props.category === 'bracelets') {
    banner = banner3;
  } else if (props.category === 'earrings') {
    banner = banner4;
  } 
  
  return (
    <>

        <div className={`${styling.hero} `}>
            <img alt='jewels' src={banner}></img>
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black bg-fixed opacity-50"></div>

            <div className={styling.overlay}></div>
            <div className={styling.herocontent}>
                <h1>{props.category ? ` ${props.category.toUpperCase()}` : 'All Products'} by JOC</h1>
                <p>Handcrafted by professionals</p>
                <button>Products</button>
            </div>
        </div>  

    </>
  )
}
