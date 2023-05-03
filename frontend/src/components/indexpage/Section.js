import React from 'react'
import styling from './Section.module.css';
import { Link } from 'react-router-dom';


export default function Section() {
  return (
    <>

    <div className={styling.container}>

        <div className={styling.first}>
            <h1 className={styling.showlove}>Show your love</h1>
            <p className={styling.txt}>Get the perfect gift for your girlfriend, mom or wife</p>
            <p className={styling.txtSmall}>Celebrate the most important women in your life this Mother's Day with our exquisite jewelry collection. Show your love with a gift that is as unique and special as she is. Our selection of necklaces, bracelets, earrings, and rings offers a wide range of styles and designs to choose from, ensuring you find the perfect gift for your mom, girlfriend, or wife. Each piece is crafted with care and attention to detail, using only the finest materials, to make sure your gift will be treasured for years to come. Don't miss the chance to express your love and appreciation for the amazing women in your life with our beautiful Mother's Day collection.</p>
            <Link to={"/products"}>
              <button>Products</button>
            </Link>
        </div>

        <div className={styling.second}>
            <h1>Check out our</h1>
            <div className={styling.flex}>
                <p>Rings</p>
                <p>Bracelets</p>
                <p>Earrings</p>
                <p>Necklace</p>
            </div>
        </div>

    </div>

    <div className='image'>
        <img className={styling.billed} alt='billede' src='https://cdn.discordapp.com/attachments/1046732555325538349/1100126331179634851/jewelry.png'></img>
    </div>

    </>
  )
}
