import React from 'react'
import styling from './Section.module.css';


export default function Section() {
  return (
    <>

    <div className={styling.container}>

        <div className={styling.first}>
            <h1 className={styling.showlove}>Show your love</h1>
            <p className={styling.txt}>Get the perfect gift for your girlfriend, mom or wife</p>
            <p className={styling.txtSmall}>Some very inspiring text about why you should buy our product to who you care about. text should be a little longer than this and also with a beautiful img inside</p>
            <button>Products</button>
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
