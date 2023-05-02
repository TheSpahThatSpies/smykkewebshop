import React, {useContext} from 'react'
import styling from '../productpage/product.module.css';
import { ShopContext } from '../../context/Shop-context';

export default function Product(props) {

  const { id } = props;
  const { name, price, image } = props.data;




  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  
  return (
    <>
      <div className={styling.productContainer}>
        <img alt='product' src={image} className={styling.productImg}></img>
        <p className={styling.name}> {name} </p>
        <p className={styling.price}>{price} DKK</p>
<button className={styling.btn} onClick={() => {
  addToCart(id);
}}>Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</> }</button>
      </div>
    </>
  )
}

