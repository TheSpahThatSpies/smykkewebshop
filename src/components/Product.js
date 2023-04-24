import React from 'react'
import styling from './Product.module.css';


export default function Product(props) {
  return (

    <>
      <div className={styling.productContainer}>
        <img alt='product' src={props.image} className={styling.productImg}></img>
        <p className={styling.name}> {props.name} </p>
        <p className={styling.price}>{props.price} DKK</p>
        <button className={styling.btn}>Add to cart</button>
      </div>
    </>
 
  )
}
