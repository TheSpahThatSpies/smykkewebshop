import React from 'react';
import styling from './CartItem.module.css';


export default function CardItem(props) {

  const {id, name, price, image} = props.data;

  return (
    <>
      <div className={styling.productContainer}>
        <img alt='product' className={styling.img} src={image}></img>
        <p className={styling.name}> {name} </p>
        <p className={styling.price}>{price} DKK</p>
      </div>
      
    </>
  )
}
